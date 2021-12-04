import React, { useEffect, useState } from "react";
import { Link, useParams, } from "react-router-dom";
import { useQuery } from "apollo@client";

// import Cart from  "../components/Cart"; 
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

import loading from "../assets/loading.gif";

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
};