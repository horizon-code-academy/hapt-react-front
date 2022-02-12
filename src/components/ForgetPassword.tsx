import { useState, ChangeEvent } from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

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
          className="login text-center p-5 d-flex flex-column justify-content-center">
          <h1>Forget password</h1>
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
              <Label htmlFor="floatingPassword">Email address</Label>
            </FormGroup>
            <Button type="button" color="dark" size="lg">
              Send
            </Button>
          </Form>
          <footer className="text-center">
            Copyright 2022 ©, Horizon code academy
          </footer>
        </Col>
        <Col xs={12} md={6} className="screen bg-dark "></Col>
      </Row>
    </Container>
  );
}

export default ForgetPassword;
