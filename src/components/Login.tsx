import { useState, ChangeEvent } from "react";
import { FormattedMessage } from "react-intl";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const changeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const changePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6} className="screen bg-dark " />
        <Col
          xs={12}
          md={6}
          className="login text-center p-5 d-flex flex-column justify-content-center"
        >
          <FormattedMessage tagName="h1" id="login.title" />
          <FormattedMessage tagName="p" id="login.subtitle" />
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
              <Label htmlFor="floatingInput">Email address</Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                type="password"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={changePassword}
              />
              <Label htmlFor="floatingPassword">Password</Label>
            </FormGroup>
            <Row>
              <Col className="d-flex">
                <FormGroup check inline className="text-left">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <Label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Remember me
                  </Label>
                </FormGroup>
              </Col>
              <Col>
                <a href="#">Forget password</a>
              </Col>
            </Row>
            <Button type="button" color="dark" size="lg">
              Login
            </Button>
          </Form>
          <footer className="text-center">
            Copyright 2022 ©, Horizon code academy
          </footer>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
