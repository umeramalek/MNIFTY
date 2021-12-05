import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { Form, Row, Col, FormGroup, Label, Input, Button} from 'reactstrap';

function Signup(props) {
    const [formState, setFormState] = useState({ email: "", password: "" });
    const [addUser] = useMutation(ADD_USER)

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(event.target.email.value);
        console.log("Successfully Signed Up!");
        try {
        const mutationResponse = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                firstName: formState.firstName,
                lastName: formState.lastName,
            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
        } catch (error) {
            console.log("error");
            console.error(error);
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
            <Link to="/login">← Go to Login</Link>

            <h2>Signup</h2>

            <Form onSubmit={handleFormSubmit}>
                <Row form>
                <Col md={6}>
                        <FormGroup>
                            <Label for="firstName">
                                First Name
                            </Label>
                            <Input
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                                type="firstName"
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="lastName">
                                Last Name
                            </Label>
                            <Input
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                type="lastName"
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                placeholder="Email"
                                type="email"
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="password">
                                Password
                            </Label>
                            <Input
                                id="password"
                                name="password"
                                placeholder="Password"
                                type="password"
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                
                <Button type="submit">
                    Sign up
                </Button>
            </Form>
        </div>

    )
}

export default Signup;