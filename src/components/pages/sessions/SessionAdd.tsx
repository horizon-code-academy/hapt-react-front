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
import Subject from "../../../@types/Subject";
import User from "../../../@types/User";
import { addSession } from "../../../actions/sessions/action";

interface sessionAddPropsType {
  refresh: () => void;
}

const SessionAdd = (props: sessionAddPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // form states
  const [name, setName] = useState<string>("");
  const [start_date, setStartDate] = useState<Date>();
  const [end_date, setEndDate] = useState<Date>();
  const [teacher, setTeacher] = useState<User[]>([]);
  const [students, setStudents] = useState<User[]>([]);
  const [subject, setSubject] = useState<Subject>();
  

  const submit = () => {
    const newSession = {
      name,
      start_date,
      end_date,
      teacher,
      students,
      subject
    };

    addSession(newSession, () => {
      props.refresh();
      setIsOpened(false);
      reset();
    });
  };

  const reset = () => {
    setName("");
    setStartDate();
    setEndDate();
    setTeacher([]);
    setStudents([]);
    setSubject();
  };

  return (
    <>
      <Button
        color="success"
        size="lg"
        className="mb-2"
        onClick={() => setIsOpened(true)}
      >
        <FormattedMessage id="page.sessions.add" />{" "}
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
          <FormattedMessage id="sessions.add.dialog.title" />
        </ModalHeader>
        <ModalBody>
          <Form inline>
            <FormGroup floating>
              <Input
                value={name}
                id="name"
                name="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <Label for="name">
                <FormattedMessage id="session.name" />
              </Label>
            </FormGroup>

            <FormGroup floating>
              <Input
                value={start_date}
                id="start_date"
                name="start_date"
                type="date"
                onChange={(e) => setStartDate(e.target.value)}
              />
              <Label for="start_date">
                <FormattedMessage id="session.start_date" />
              </Label>
            </FormGroup>

            <FormGroup floating>
              <Input
                value={end_date}
                id="end_date"
                name="end_date"
                type="date"
                onChange={(e) => setEndDate(e.target.value)}
              />
              <Label for="end_date">
                <FormattedMessage id="session.end_date" />
              </Label>
            </FormGroup>

            <FormGroup floating>
              <Input
                value={teacher}
                id="teacher"
                name="teacher"
                type="text"
                onChange={(e) => setTeacher(e.target.value)}
              />
              <Label for="teacher">
                <FormattedMessage id="session.teacher" />
              </Label>
            </FormGroup>

            <FormGroup floating>
              <Input
                value={students}
                id="students"
                name="students"
                type="text"
                onChange={(e) => setStudents(e.target.value)}
              />
              <Label for="students">
                <FormattedMessage id="session.students" />
              </Label>
            </FormGroup> 

            <FormGroup floating>
              <Input
                value={subject}
                id="subject"
                name="subject"
                type="text"
                onChange={(e) => setSubject(e.target.value)}
              />
              <Label for="subject">
                <FormattedMessage id="session.subject" />
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

export default SessionAdd;
