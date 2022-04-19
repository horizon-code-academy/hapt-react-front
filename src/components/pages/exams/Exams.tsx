import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Table } from "reactstrap";
import Tests from "../../../@types/Exam";

const Exams = () => {
  const [testss] = useState<Tests[]>([]);
  return (
    <>
      <div className="d-flex justify-content-between">
        <FormattedMessage tagName="h1" id="page.title.tests" />
      </div>
      <Table bordered hover responsive striped>
        <thead>
          <tr>
            <th>
              <FormattedMessage id="tests.label" />
            </th>
            <th>
              <FormattedMessage id="tests.type" />
            </th>
            <th>
              <FormattedMessage id="tests.subject" />
            </th>
            <th>
              <FormattedMessage id="tests.examTests" />
            </th>
          </tr>
        </thead>
        <tbody>
          {testss.length ? (
            testss.map((tests, i) => (
              <tr key={i}>
                <td scope="row">{tests.label}</td>
                <td>{tests.type}</td>
                <td>{tests.subject}</td>
                <td>{tests.examTests}</td>
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

export default Exams;
