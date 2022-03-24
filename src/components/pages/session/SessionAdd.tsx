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
import { addSession } from "../../../actions/sessions/action";

interface SessionAddPropsType {
  refresh: () => void;
}
const SessionAdd = (props: SessionAddPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const [label, setLabel] = useState<string>("");
  const [start_date, setStartDate] = useState<string>();
  const [end_date, setEndDate] = useState<string>();
  const [teacher, setTeacher] = useState<string>();
  const [students, setStudents] = useState<string>("");
  const [subject, setSubject] = useState<string>("");

  const submit = () => {
    const newSession = {
      label,
      start_date,
      end_date,
      teacher,
      students,
      subject,
    };

    addSession(newSession, () => {
      props.refresh();
      setIsOpened(false);
      reset();
    });
  };

  const reset = () => {
    setLabel("");
    setStartDate("");
    setEndDate("");
    setTeacher("");
    setStudents("");
    setSubject("");
  };
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
                value={label}
                id="label"
                name="label"
                type="text"
                onChange={(e) => setLabel(e.target.value)}
              />
              <Label for="label">
                <FormattedMessage id="subject.label" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={field}
                id="field"
                name="field"
                type="select"
                onChange={(e) => setField(e.target.value)}
              >
                {fields.map((f) => (
                  <option key={f.key} value={f.key}>
                    {f.name}
                  </option>
                ))}
              </Input>
              <Label for="field">
                <FormattedMessage id="subject.field" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={nb_hour}
                id="nb_hour"
                name="nb_hour"
                type="number"
                onChange={(e) => setNbHour(Number.parseInt(e.target.value))}
              />
              <Label for="nb_hour">
                <FormattedMessage id="subject.nb_hour" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={price_hour}
                id="price_hour"
                name="price_hour"
                type="number"
                onChange={(e) => setPriceHour(Number.parseInt(e.target.value))}
              />
              <Label for="price_hour">
                <FormattedMessage id="subject.price_hour" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={description}
                id="description"
                name="description"
                type="text"
                onChange={(e) => setDescription(e.target.value)}
              />
              <Label for="description">
                <FormattedMessage id="subject.description" />
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

export default SubjectAdd;
