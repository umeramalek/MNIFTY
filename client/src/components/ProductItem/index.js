import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";

// importing indexDB as idbPromise to manage cart storage
import { idbPromise } from "../../utils/helpers";


/*
*** ProductItem defines the attributes of item through deconstruction
***     as well as deconstructs store context,
***     it then contains a function and returns the 'HTML'
*** @addToCart does two things: it adds to cart and it updates an item through
***     the update quantity button.
*/

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    // Once again, quantity isn't necessary
    // quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,

        // Quantity isn't being utilized in this
        // purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,

        // Quantity isn't being utilized in this
        // purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item,
            // Quantity isn't being utilized in this
            //  purchaseQuantity: 1
             }
      });
      idbPromise('cart', 'put', { ...item, 
        // quantity isn't being utilized in this
        // purchaseQuantity: 1 
    });
    }
  }


//   returns the visible elements to be displayed.
  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
          {/* we don't need quantity for the current complexity of this project */}
        {/* <div>{quantity} {pluralize("item", quantity)} in stock</div> */}
        <span>${price}</span>
      </div>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default ProductItem;
