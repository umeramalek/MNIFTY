import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/IndexDB";

/*
***
*** @removeFromCart removes an item from cart
***
*/


const CartItem = ({ item }) => {

    const [, dispatch] = useStoreContext();
  
    const removeFromCart = item => {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });
    };
  
    return (
      <div className="flex-row">
        <div>
          <img
            src={`/images/${item.image}`}
            alt=""
          />
        </div>
        <div>
          <div>{item.name}: {item.price} MUT</div>
          <div>
            <span
              role="img"
              aria-label="trash"
              onClick={() => removeFromCart(item)}
            >
              REMOVE: 🗑️
            </span>
          </div>
        </div>
      </div>
    );
  }
  
  export default CartItem;