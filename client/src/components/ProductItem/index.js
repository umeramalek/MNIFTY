import React from "react";
import { Link } from "react-router-dom";

// commented out, not necessary
// import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";

// importing indexDB as idbPromise to manage cart storage
import { idbPromise } from "../../utils/IndexDB";


/*
*** ProductItem defines the attributes of item through deconstruction
***     as well as deconstructs store context,
***     it then contains a function and returns the 'HTML'
*/

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
      });
      idbPromise('cart', 'put', {
        ...itemInCart
      });
    } else 
    {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item,}
      });
      idbPromise('cart', 'put', { ...item });
    
    }
  }


//   returns the visible elements to be displayed.
  return (
    <div className="card px-1 py-1 glassCard">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <span>{price} MUT Tokens</span>
      </div>
      <button onClick={addToCart}>+ ADD TO CART</button>
    </div>
  );
}

export default ProductItem;
