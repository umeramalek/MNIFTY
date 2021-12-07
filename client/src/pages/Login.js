import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("does it reach here?", login)
    try {
      console.log(login)
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      console.log("it doesn't even make it this far")
      Auth.login(token);
    } catch (e) {
      console.log("this is the error lmao", e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/signup"> Go to Sign Up </Link>

      <h2>Login</h2>

      <Form inline onSubmit={handleFormSubmit}>
        <FormGroup floating className="flex-row space-between my-2">
        <Label for="exampleEmail">
            Email
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
            onChange={handleChange}
          />
        </FormGroup>
        {' '}
        <FormGroup floating className="flex-row space-between my-2">
        <Label for="examplePassword">
            Password
          </Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
            onChange={handleChange}
          />

        </FormGroup>
        {' '}
        {error ? (
          <div className="butt">
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


export default Login;