import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
    const [formState, setFormState] = useState({ email: "", password: "" });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { email: formState.email, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (err) {
            console.log(error)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className="container my-1">
            <Link to="/signup"> Sign Up </Link>

            <h2>Login</h2>

            <Form inline onSubmit={handleFormSubmit}>
                <FormGroup floating>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Email"
                        type="email"
                        onChange={handleChange}
                    />
                    <Label for="exampleEmail">
                        Email
                    </Label>
                </FormGroup>
                {' '}
                <FormGroup floating>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Password"
                        type="password"
                        onChange={handleChange}
                    />
                    <Label for="examplePassword">
                        Password
                    </Label>
                </FormGroup>
                {' '}
                {error ? (
                    <div>
                        <p className="error-text">The provided credentials are incorrect</p>
                    </div>
                ) : null}
                <Button>
                    Submit
                </Button>
            </Form>
        </div>


    )

}