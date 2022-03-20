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
import Subject from "../../../@types/Subject";
import { editSubjects } from "../../../actions/subjects/action";

interface SubjectEditPropsType {
  subject: Subject;
  refresh: () => void;
}

const fields = [
  { key: "it", name: "IT" },
  { key: "finance", name: "Finance" },
  { key: "art", name: "Art" },
  { key: "langues", name: "Langues" },
];

const SubjectEdit = ({ subject, refresh }: SubjectEditPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // form states
  const [label, setLabel] = useState<string>(subject.label);
  const [field, setField] = useState<string>(subject.field);
  const [nb_hour, setNbHour] = useState<number>(subject.nb_hour);
  const [price_hour, setPriceHour] = useState<number>(subject.price_hour);
  const [description, setDescription] = useState<string | undefined>(
    subject.description
  );

  const submit = () => {
    const editSubject = {
      label,
      field,
      nb_hour,
      price_hour,
      description,
    };

    editSubjects(editSubject, () => {
      refresh();
      setIsOpened(false);
      reset();
    });
  };

  const reset = () => {
    setLabel("");
    setField("");
    setNbHour(0);
    setPriceHour(0);
    setDescription("");
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
          <FormattedMessage id="Subjects.edit.dialog.title" />
        </ModalHeader>
        <ModalBody>
          <Form inline>
            <FormGroup floating>
              <Input value={label} id="label" name="label" type="text" />
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

export default SubjectEdit;
