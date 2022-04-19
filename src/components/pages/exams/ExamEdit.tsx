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
import ExamTest from "../../../@types/Tests";
import { editExams, getExams } from "../../../actions/exams/action";

interface ExamEditPropsType {
  exam: Exam;
  refresh: () => void;
}

const ExamEdit = ({ exam, refresh }: ExamEditPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const [examTestList, setExamTestList] = useState<ExamTest[] | undefined>();

  const [label, setLabel] = useState<string>(exam.label);
  const [type, setType] = useState<string>(exam.type);
  const [subject, setSubject] = useState<string | undefined>();
  const [examTest, setExamTest] = useState<ExamTest[] | undefined>();

  const submit = () => {
    const editexam = {
      label,
      type,
      subject,
      examTest,
    };

    editExams(editexam, () => {
      refresh();
      setIsOpened(false);
      reset();
    });
  };

  const reset = () => {
    setLabel("");
    setType("");
    setSubject("");
    setExamTest(undefined);
  };
  useEffect(() => {
    getExams(setExamTestList);
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
          <FormattedMessage id="exam.edit.dialog.title" />
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
                <FormattedMessage id="tests.label" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={type}
                id="type"
                name="type"
                type="text"
                onChange={(e) => setType(e.target.value)}
              />
              <Label for="type">
                <FormattedMessage id="tests.type" />
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
                <FormattedMessage id="tests.subject" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={examTest}
                id="examTest"
                name="examTest"
                type="select"
                onChange={(e) => setExamTest}
              >
                {examTestList?.map((x) => (
                  <option key={x._id} value={x._id}>
                    {x.label}
                  </option>
                ))}
              </Input>
              <Label for="examTest">
                <FormattedMessage id="tests.examTest" />
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
