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
import { addSubject } from "../../../actions/subjects/action";

interface SubjectAddPropsType {
  refresh: () => void;
}

const SubjectAdd = (props: SubjectAddPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // form states
  const [label, setLabel] = useState<string>("");
  const [field, setField] = useState<string>("");
  const [nb_hour, setNbHour] = useState<number>(0);
  const [price_hour, setPriceHour] = useState<number>(0);
  const [description, setDescription] = useState<string | undefined>("");

  const submit = () => {
    const newSubject = {
      label,
      field,
      nb_hour,
      price_hour,
      description,
    };

    addSubject(newSubject, () => {
      props.refresh();
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
      <Button
        color="success"
        size="lg"
        className="mb-2"
        onClick={() => setIsOpened(true)}
      >
        <FormattedMessage id="page.subject.add" />{" "}
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
          <FormattedMessage id="Subject.add.dialog.title" />
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
                <option value="it">IT</option>
                <option value="finance">Finance</option>
                <option value="art">Art</option>
                <option value="lang">Langue</option>
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
