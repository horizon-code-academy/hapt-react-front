import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

const UserAdd = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // form states
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [address, setAddress] = useState<string | undefined>("");
  const [roles, setRoles] = useState<string[]>([]);

  return (
    <>
      <Button
        color="success"
        size="lg"
        className="mb-2"
        onClick={() => setIsOpened(true)}
      >
        <FormattedMessage id="page.users.add" />{" "}
        <FontAwesomeIcon icon={faAdd} />
      </Button>
      <Modal
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalHeader
          className="bg-success text-white"
          toggle={function noRefCheck() {}}
        >
          <FormattedMessage id="users.add.dialog.title" />
        </ModalHeader>
        <ModalBody>
          <Form inline>
            <FormGroup floating>
              <Input
                value={firstName}
                id="firstname"
                name="firstname"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Label for="firstname">
                <FormattedMessage id="user.firstName" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={lastName}
                id="lastName"
                name="lastName"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
              />
              <Label for="lastName">
                <FormattedMessage id="user.lastName" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={email}
                id="email"
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label for="email">
                <FormattedMessage id="user.email" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={password}
                id="password"
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Label for="password">
                <FormattedMessage id="user.password" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={phone}
                id="phone"
                name="phone"
                type="tel"
                onChange={(e) => setPhone(e.target.value)}
              />
              <Label for="phone">
                <FormattedMessage id="user.phone" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={address}
                id="address"
                name="address"
                type="text"
                onChange={(e) => setAddress(e.target.value)}
              />
              <Label for="address">
                <FormattedMessage id="user.address" />
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input checked={roles.includes("teacher")} type="checkbox" />
              <Label check={roles.includes("teacher")}>
                <FormattedMessage id="role.teacher" />
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input checked={roles.includes("student")} type="checkbox" />
              <Label check={roles.includes("student")}>
                <FormattedMessage id="role.student" />
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input checked={roles.includes("admin")} type="checkbox" />
              <Label check={roles.includes("admin")}>
                <FormattedMessage id="role.admin" />
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={function noRefCheck() {}}>
            <FormattedMessage id="button.confirm" />
          </Button>{" "}
          <Button onClick={() => setIsOpened(false)}>
            <FormattedMessage id="button.cancel" />
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default UserAdd;
