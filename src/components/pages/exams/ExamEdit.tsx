import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
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
import Exam from "../../../@types/Exam";
import User from "../../../@types/User";
import { editExams } from "../../../actions/exams/action";
import { getUsers } from "../../../actions/users/action";

interface ExamEditPropsType {
  exam: Exam;
  refresh: () => void;
}

const ExamEdit = ({ exam, refresh }: ExamEditPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const [studentList, setStudentList] = useState<User[] | undefined>();

  const [label, setLabel] = useState<string>(exam.label);
  const [score, setScore] = useState<number>(exam.score);
  const [note, setNote] = useState<number>(exam.note);
  const [students, setStudents] = useState<string[] | undefined>();

  const submit = () => {
    const editexam = {
      label,
      score,
      note,
      students,
    };

    editExams(editexam, () => {
      refresh();
      setIsOpened(false);
      reset();
    });
  };

  const reset = () => {
    setLabel("");
    setScore(0);
    setNote(0);
    setStudents(undefined);
  };

  useEffect(() => {
    getUsers((users) =>
      setStudentList(users.filter((u) => u.roles.includes("student")))
    );
  }, []);
  return (
    <>
      <Button color="warning" onClick={() => setIsOpened(true)}>
        <FontAwesomeIcon icon={faPen} />
      </Button>
      <Modal
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalHeader className="bg-warning" toggle={() => setIsOpened(false)}>
          <FormattedMessage id="Sessions.edit.dialog.title" />
        </ModalHeader>
        <ModalBody>
          <Form inline>
            <FormGroup floating>
              <Input
                value={label}
                id="label"
                name="label"
                type="text"
                onChange={(e) => setLabel(e.target.value)}
              />
              <Label for="label">
                <FormattedMessage id="exam.label" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={score}
                id="score"
                name="score"
                type="number"
                onChange={(e) => setScore(Number.parseInt(e.target.value))}
              />
              <Label for="score">
                <FormattedMessage id="exam.score" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={note}
                id="note"
                name="note"
                type="number"
                onChange={(e) => setNote(Number.parseInt(e.target.value))}
              />
              <Label for="note">
                <FormattedMessage id="exam.note" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={students}
                id="students"
                name="students"
                type="select"
                onChange={(e) => setStudents}
              >
                {studentList?.map((s) => (
                  <option key={s._id} value={s._id}>
                    {s.firstName + ` ` + s.lastName}
                  </option>
                ))}
              </Input>
              <Label for="students">
                <FormattedMessage id="exam.students" />
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={submit}>
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

export default ExamEdit;
