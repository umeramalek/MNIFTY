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

