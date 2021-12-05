import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/IndexDB";

/*
** @removeFromCart removes an item from cart
** @onChange removes item if quantity is 0, else it adds more
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
  





    // We should remove this if it's un-necessary.
    // const onChange = (e) => {
    //   const value = e.target.value;
    //   if (value === '0') {
    //     dispatch({
    //       type: REMOVE_FROM_CART,
    //       _id: item._id
    //     });
    //     idbPromise('cart', 'delete', { ...item });
  
    //   } else {
    //     dispatch({
    //       type: UPDATE_CART_QUANTITY,
    //       _id: item._id,
    //       purchaseQuantity: parseInt(value)
    //     });
    //     idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
  
    //   }
    // }
  
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
            {/* <span>Qty:</span> */}
            {/* <input
              type="number"
              placeholder="1"
            //   commenting out purchase quantity just incase errors spring up
              value={item.purchaseQuantity}
              onChange={onChange}
            /> */}
            <span
              role="img"
              aria-label="trash"
              onClick={() => removeFromCart(item)}
            >
              REMOVE 🗑️
            </span>
          </div>
        </div>
      </div>
    );
  }
  
  export default CartItem;