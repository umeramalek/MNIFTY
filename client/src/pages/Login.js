import React, { useState } from 'react';
import { Navbar, NavbarBrand,NavbarToggler,Collapse,NavItem,NavLink } from 'reactstrap';
import { useMutation } from '@apollo/client';

import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
    const [formState, setFormState] = useState({email:"", password:""});
    const [login, {error}] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
            variables: {email: formState.email, password:formState.password},
            });
            const token= mutationResponse.data.login.token;
            Auth.login(token);
        } catch(err){
            console.log(error)
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState, 
            [name]: value,
        });
    };

    return (

    )

}