import React, { useEffect, useState } from "react";
import { Link, useParams, } from "react-router-dom";
import { useQuery } from "@apollo/client";

import VanillaTilt from "vanilla-tilt";

import Cart from "../components/Cart";
// don't current need Cart but will in the future

import { useStoreContext } from "../utils/GlobalState";

// import strings that reference actions from actions.js
import {
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    ADD_TO_CART,
    UPDATE_PRODUCTS,
} from "../utils/actions";

//used to query an individual product rather than all
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/IndexDB";

import loadingSpin from "../assets/loading.gif";

function Detail() {
    const [state, dispatch] = useStoreContext();
    const { id } = useParams();
    const [currentProduct, setCurrentProduct] = useState({});
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    const { products, cart } = state;



    useEffect(() => {
        // checks to see if a product already exists within the global store
        if (products.length) {
            setCurrentProduct(products.find((product) => product._id === id));
        } else if (data) {
            // if the product doesn't exist in the global store then it will check the server data
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products,
            });

            data.products.forEach((product) => {
                idbPromise('products', 'put', product);
            });
        } else if (!loading) {
            // if it doesn't exist in global store or server then it will pull the caache from indexDB
            idbPromise('products', 'get').then((indexedProducts) => {
                dispatch({
                    type: UPDATE_PRODUCTS,
                    products: indexedProducts,
                });
            });
        }
    }, [products, data, loading, dispatch, id]);


    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === id);
        // checks to see if an item matching the item's id currently exists in the car, if it does then it will modify the quanty of that item when added
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
            });
            //uses put to update the cart quantity
            idbPromise('cart', 'put', {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
            });
        } else {
            //however, if no item matching the id currently exists, then it will be added to the cart and the quantity updated to 1
            dispatch({
                type: ADD_TO_CART,
                product: { ...currentProduct, purchaseQuantity: 1 },
            });
            idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
            }
        };

        const removeFromCart = () => {
            // deletes an item from the cart based on product id number
            dispatch({
                type: REMOVE_FROM_CART,
                _id: currentProduct._id,
            });

            idbPromise('cart', 'delete', { ...currentProduct });
        };

        VanillaTilt.init(document.querySelector(".solo-card"), {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 1,
            "glare-prerender": false,
        });

        return (
            <>
                {currentProduct && cart ? (
                    <div className="card px-1 py-1 glassCard solo-card">
                        <Link to="/">← Back to Products</Link>
                        <h2>{currentProduct.name}</h2>
                        <p>{currentProduct.description}</p>
                        <img
                            src={`/images/${currentProduct.image}`}
                            alt={currentProduct.name}
                        />
                        <p>
                            <strong>Price:</strong> {currentProduct.price} MUT Tokens {' '}
                            <button onClick={addToCart}>+ ADD TO CART</button>
                            <button
                                disabled={!cart.find((p) => p._id === currentProduct._id)}
                                onClick={removeFromCart}>
                                Remove from Cart
                            </button>
                        </p>
                    </div>
                ) : null}
                {loading ? <img src={loadingSpin} alt="loading" /> : null}
                <Cart />
            </>
        );
    };

    export default Detail;