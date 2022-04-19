import { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormattedMessage } from "react-intl";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Exam from "../../../@types/Exam";
import { deleteExams } from "../../../actions/exams/action";

interface ExamDeletePropsType {
  exam: Exam;
  refresh: () => void;
}

const ExamDelete = ({ exam, refresh }: ExamDeletePropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const submit = () => {
    deleteExams(exam, () => {
      refresh();
      setIsOpened(false);
    });
  };

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
          <FormattedMessage id="exams.delete.dialog.title" />
        </ModalHeader>
        <ModalBody>
          <FormattedMessage id="exams.delete.dialog.text" /> {exam.label}?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={submit}>
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

export default ExamDelete;
