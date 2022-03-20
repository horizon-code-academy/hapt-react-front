import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { ButtonGroup, Table } from "reactstrap";
import SubjectEdit from "./SubjectEdit";
import SubjectAdd from "./SubjectAdd";
import SubjectDelete from "./SubjectDelete";
import Subject from "../../../@types/Subject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { getSubjects } from "../../../actions/subjects/action";

const Subjects = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    getSubjects(setSubjects); // aka setSubjects(data)
  }, []);
  return (
    <>
      <div className="d-flex justify-content-between">
        <FormattedMessage tagName="h1" id="page.title.subjects" />
        <SubjectAdd refresh={() => getSubjects(setSubjects)} />
      </div>
      <Table bordered hover responsive striped>
        <thead>
          <tr>
            <th>
              <FormattedMessage id="subject.label" />
            </th>
            <th>
              <FormattedMessage id="subject.field" />
            </th>
            <th>
              <FormattedMessage id="subject.nb_hour" />
            </th>
            <th>
              <FormattedMessage id="subject.price_hour" />
            </th>
            <th>
              <FormattedMessage id="subject.actions" />
            </th>
          </tr>
        </thead>
        <tbody>
          {subjects.length ? (
            subjects.map((subject, i) => (
              <tr key={i}>
                <td scope="row">{subject.label}</td>
                <td>{subject.field}</td>
                <td>{subject.nb_hour}</td>
                <td>{subject.price_hour}</td>
                <td>
                  <ButtonGroup>
                    <SubjectEdit
                      subject={subject}
                      refresh={() => getSubjects(setSubjects)}
                    />
                    <SubjectDelete
                      subject={subject}
                      refresh={() => getSubjects(setSubjects)}
                    />
                  </ButtonGroup>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center p-5">
                <FontAwesomeIcon icon={faBoxOpen} size="4x" />
                <br />
                <FormattedMessage id="page.users.no-data" />
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default Subjects;
