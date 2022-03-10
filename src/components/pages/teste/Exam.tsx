import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Table } from "reactstrap";
import Tests from "../../../@types/Tests";

const Exam = () => {
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
              <FormattedMessage id="tests.exam" />
            </th>
            <th>
              <FormattedMessage id="tests.score" />
            </th>
            <th>
              <FormattedMessage id="tests.note" />
            </th>
            <th>
              <FormattedMessage id="tests.student" />
            </th>
          </tr>
        </thead>
        <tbody>
          {testss.length ? (
            testss.map((tests, i) => (
              <tr key={i}>
                <td scope="row">{tests.exam}</td>
                <td>{tests.score}</td>
                <td>{tests.note}</td>
                <td>{tests.student}</td>
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

export default Exam;
