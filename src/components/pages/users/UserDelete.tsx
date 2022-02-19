import { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormattedMessage } from "react-intl";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import User from "../../../@types/User";

const UserDelete = ({ user }: { user: User }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <>
      <Button color="danger" onClick={() => setIsOpened(true)}>
        <FontAwesomeIcon icon={faTrash} />
      </Button>
      <Modal
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalHeader
          className="bg-danger text-white"
          toggle={() => setIsOpened(!isOpened)}
        >
          <FormattedMessage id="users.delete.dialog.title" />
        </ModalHeader>
        <ModalBody>
          <FormattedMessage id="users.delete.dialog.text" /> {user.firstName}{" "}
          {user.lastName}?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={function noRefCheck() {}}>
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

export default UserDelete;
