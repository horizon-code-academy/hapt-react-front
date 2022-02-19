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

const SubjectEdit = ({ subject }: { subject: Subject }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // form states
  const [label, setLabel] = useState<string>(subject.label);
  const [field, setField] = useState<string>(subject.field);
  const [nb_hour, setNbHour] = useState<number>(subject.nb_hour);
  const [price_hour, setPriceHour] = useState<number>(subject.price_hour);
  const [description, setDescription] = useState<string | undefined>(
    subject.description
  );

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
              <Input value={field} id="field" name="field" type="select">
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
              />
              <Label for="description">
                <FormattedMessage id="subject.description" />
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={function noRefCheck() {}}>
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
