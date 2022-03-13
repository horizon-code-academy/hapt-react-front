import { faPen } from "@fortawesome/free-solid-svg-icons";
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
import Session from "../../../@types/Session";
import Subject from "../../../@types/Subject";
import User from "../../../@types/User";
import { editSession } from "../../../actions/sessions/action";

interface SessionEditPropsType {
  session: Session;
  refresh: () => void;
}
const SessionEdit = ({ session, refresh }: SessionEditPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // form states
  const [name, setName] = useState<string>(session.name);
  const [start_date, setStartDate] = useState<Date>(session.start_date);
  const [end_date, setEndDate] = useState<Date>(session.end_date);
  const [teacher, setTeacher] = useState<User[]>(session.teacher);
  const [students, setStudents] = useState<User[]>(session.students);
  const [subject, setSubject] = useState<Subject>(session.subject);

  const submit = () => {
    const newSession = {
      _id: session._id,
      name,
      start_date,
      end_date,
      teacher,
      students,
      subject,
    };

    editSession(newSession, () => {
      refresh();
      setIsOpened(false);
      reset(newSession);
    });
  };

  const reset = (session: Session) => {
    setName(session.name);
    setStartDate(session.start_date);
    setEndDate(session.end_date);
    setTeacher(session.teacher);
    setStudents(session.students);
    setSubject(session.subject);
  };

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
          <FormattedMessage id="sessions.edit.dialog.title" />
        </ModalHeader>
        <ModalBody>
          <Form inline>
            <FormGroup floating>
              <Input value={name} id="name" name="name" type="text" />
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
              />
              <Label for="end_date">
                <FormattedMessage id="session.end_date" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input value={teacher} id="teacher" name="teacher" type="text" />
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
              />
              <Label for="teacher">
                <FormattedMessage id="session.students" />
              </Label>
            </FormGroup>

            <FormGroup floating>
              <Input value={subject} id="subject" name="subject" type="text" />
              <Label for="subject">
                <FormattedMessage id="session.subject" />
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={submit}>
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

export default SessionEdit;
