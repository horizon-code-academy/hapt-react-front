import { faAdd } from "@fortawesome/free-solid-svg-icons";
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
import User from "../../../@types/User";
import { addExam } from "../../../actions/exams/action";
import { getUsers } from "../../../actions/users/action";

interface ExamAddPropsType {
  refresh: () => void;
}
const ExamAdd = (props: ExamAddPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const [studentList, setStudentList] = useState<User[] | undefined>([]);

  const [exam, setExam] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [note, setNote] = useState<number>(0);
  const [students, setStudents] = useState<string[] | undefined>([]);

  const submit = () => {
    const newexam = {
      exam,
      score,
      note,
      students,
    };

    addExam(newexam, () => {
      props.refresh();
      setIsOpened(false);
      reset();
    });
  };

  const reset = () => {
    setExam("");
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
      <Button
        color="success"
        size="lg"
        className="mb-2"
        onClick={() => setIsOpened(true)}
      >
        <FormattedMessage id="page.session.add" />{" "}
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
          toggle={() => setIsOpened(!isOpened)}
        >
          <FormattedMessage id="Session.add.dialog.title" />
        </ModalHeader>
        <ModalBody>
          <Form inline>
            <FormGroup floating>
              <Input
                value={exam}
                id="exam"
                name="exam"
                type="text"
                onChange={(e) => setExam(e.target.value)}
              />
              <Label for="exam">
                <FormattedMessage id="exam.exam" />
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

export default ExamAdd;
