import React from "react";
import Cards from 'react-credit-cards-2';
import "react-credit-cards-2/es/styles-compiled.css";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import useForm from "./paymentForm";
import { useSelector } from "react-redux";
import "react-credit-cards-2/es/styles-compiled.css";


function PaymentCart() {
    const selecytedData = useSelector((state) => state.FinaleReducer[0]);
    const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
    
    return (
        <>

            <div style={{ textAlign: "center" }}>
                <h1>Pay Your Amount</h1>
                <div className="container">
                    <div className="box justify-content-center align-items-center">
                        <div className="formDivs">
                            <div className="creditCard">
                                <Cards
                                    cvc={values.cardSecurityCode}
                                    expiry={values.cardExpiration}
                                    focused={values.focus}
                                    name={values.cardName}
                                    number={values.cardNumber}
                                />
                            </div><br />
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        id="cardName"
                                        data-testid="cardName"
                                        name="cardName"
                                        placeholder="Cardholder Name"
                                        value={values.cardName}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        isValid={errors.cname}
                                        autoComplete="off"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control
                                        type="number"
                                        id="cardNumber"
                                        data-testid="cardNumber"
                                        name="cardNumber"
                                        placeholder="Card Number"
                                        value={values.cardNumber}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        isValid={errors.cnumber}
                                        autoComplete="off"
                                    />
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                name="cardType"
                                                id="cardType"
                                                data-testid="cardType"
                                                placeholder="Card Type"
                                                value={values.cardType}
                                                onChange={handleChange}
                                                onFocus={handleFocus}
                                                isValid={errors.ctype}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                id="cardExpiration"
                                                data-testid="cardExpiration"
                                                name="cardExpiration"
                                                placeholder="Expiration Date"
                                                value={values.cardExpiration}
                                                onChange={handleChange}
                                                onFocus={handleFocus}
                                                isValid={errors.cexp}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Control
                                                type="number"
                                                id="cardSecurityCode"
                                                data-testid="cardSecurityCode"
                                                name="cardSecurityCode"
                                                placeholder="Security Code"
                                                value={values.cardSecurityCode}
                                                onChange={handleChange}
                                                onFocus={handleFocus}
                                                isValid={errors.ccvv}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                id="cardPostalCode"
                                                data-testid="cardPostalCode"
                                                name="cardPostalCode"
                                                placeholder="Postal Code"
                                                value={values.cardPostalCode}
                                                onChange={handleChange}
                                                onFocus={handleFocus}
                                                isValid={errors.cpostal}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button
                                    size={"block"}
                                    data-testid="validateButton"
                                    id="validateButton"
                                    type="submit"
                                >
                                    Pay Rs.{selecytedData[0].total.toFixed(2)}
                                </Button>
                            </Form>
                        </div><br />
                        <Alert
                            id="alertMessage"
                            data-testid="alertMessage"
                            variant={errors.variant}
                            show={errors.show}
                        >
                            {errors.message}
                        </Alert>{" "}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentCart