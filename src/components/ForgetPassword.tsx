import {ChangeEvent, useState} from "react";
import {FormattedMessage} from "react-intl";
import {Button, Col, Container, Form, FormGroup, Input, Row,} from "reactstrap";
import {Link} from "react-router-dom";

function ForgetPassword() {
    const [email, setEmail] = useState<string>("");

    const changeEmail = (e: ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value);

    return (
        <Container fluid>
            <Row>
                <Col
                    xs={12}
                    md={6}
                    className="login text-center p-5 d-flex flex-column justify-content-center"
                >
                    <FormattedMessage tagName="h1" id="forget.title"/>
                    <FormattedMessage tagName="p" id="forget.subtitle"/>
                    <Form>
                        <FormGroup floating className="mb-3">
                            <Input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                value={email}
                                onChange={changeEmail}
                            />
                            <FormattedMessage tagName="label" id="login.email"/>
                        </FormGroup>
                        <Button tag={Link} to={"/"} type="button" color="dark" size="lg">
                            <FormattedMessage id="forget.btn"/>
                        </Button>
                    </Form>
                    <footer className="text-center">
                        <FormattedMessage id="login.copy"/>
                    </footer>
                </Col>
                <Col xs={12} md={6} className="screen bg-dark "></Col>
            </Row>
        </Container>
    );
}

export default ForgetPassword;
