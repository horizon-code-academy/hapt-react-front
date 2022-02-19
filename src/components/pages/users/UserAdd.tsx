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
              <Input id="firstname" name="firstname" type="email" />
              <Label for="firstname">
                <FormattedMessage id="user.firstName" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input id="email" name="email" type="email" />
              <Label for="email">
                <FormattedMessage id="user.email" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input id="password" name="password" type="password" />
              <Label for="password">
                <FormattedMessage id="user.password" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input id="phone" name="phone" type="tel" />
              <Label for="phone">
                <FormattedMessage id="user.phone" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input id="address" name="address" type="text" />
              <Label for="address">
                <FormattedMessage id="user.address" />
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" />
              <Label check>
                <FormattedMessage id="role.teacher" />
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" />
              <Label check>
                <FormattedMessage id="role.student" />
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" />
              <Label check>
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
