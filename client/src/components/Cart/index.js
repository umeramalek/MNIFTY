import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/IndexDB';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';

// stripes public test api key
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);


  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        //  creating a checkout session if data is valid
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      // adds up the total price
      sum += item.price;
    });
    return sum.toFixed(2);
  }
  
  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }


  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      
        productIds.push(item._id);

    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span role="img" aria-label="trash">
          🛒
        </span>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        [close]
      </div>
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong>Total: {calculateTotal()} MUT</strong>

            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span><br/>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>
          Your cart is empty.
        </h3>
      )}
    </div>
  );
};

export default Cart;