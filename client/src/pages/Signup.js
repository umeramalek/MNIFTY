import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    console.log(token)
    Auth.login(token);
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
      <Link to="/login">← Go to Login</Link>

      <h2>Signup</h2>

      <Form onSubmit={handleFormSubmit}>
        <Row form>
          <Col md={6}>
            <FormGroup className="flex-row space-between my-2">
              <Label for="examplefirstName">
                First Name
              </Label>
              <Input
                id="examplefirstName"
                name="firstName"
                placeholder="First Name"
                type="firstName"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className="flex-row space-between my-2">
              <Label for="examplelastName">
                Last Name
              </Label>
              <Input
                id="examplelastName"
                name="lastName"
                placeholder="Last Name"
                type="lastName"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className="flex-row space-between my-2">
              <Label for="exampleEmail">
                Email
              </Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="email "
                type="email"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className="flex-row space-between my-2">
              <Label for="examplePassword">
                Password
              </Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password"
                type="password"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>

        <Button >
          Sign up
        </Button>
      </Form>
    </div>

  )
}

export default Signup;