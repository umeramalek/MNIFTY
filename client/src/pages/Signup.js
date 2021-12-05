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
                        <FormGroup>
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
                        <FormGroup>
                            <Label for="exampleEmail">
                                Email
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="with a placeholder"
                                type="email"
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="examplePassword">
                                Password
                            </Label>
                            <Input
                                id="examplePassword"
                                name="password"
                                placeholder="password placeholder"
                                type="password"
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                
                <Button>
                    Sign up
                </Button>
            </Form>
        </div>

    )
}

export default Signup;