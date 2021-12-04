import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';


function OrderHistory() {
    const { data } = useQuery(QUERY_USER);
    let user;
  
    if (data) {
      user = data.user;
    }