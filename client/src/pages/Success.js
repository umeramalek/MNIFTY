import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Jumbotron from '../components/Jumbotron';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

function Success() {
    const [addOrder] = useMutation(ADD_ORDER);
  
    useEffect(() => {
      async function saveOrder() {
        const cart = await idbPromise('cart', 'get');
        const products = cart.map((item) => item._id);
  