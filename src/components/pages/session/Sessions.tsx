import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Table } from "reactstrap";
import Session from "../../../@types/Session";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

const Sessions = () => {
  const [sessionn] = useState<Session[]>([]);
  return (
    <>
      <div className="d-flex justify-content-between">
        <FormattedMessage tagName="h1" id="page.title.session" />
      </div>
      <Table bordered hover responsive striped>
        <thead>
          <tr>
            <th>
              <FormattedMessage id="session.label" />
            </th>
            <th>
              <FormattedMessage id="session.start_date" />
            </th>
            <th>
              <FormattedMessage id="session.end_date" />
            </th>
            <th>
              <FormattedMessage id="session.teacher" />
            </th>
            <th>
              <FormattedMessage id="session.students" />
            </th>
            <th>
              <FormattedMessage id="session.subject" />
            </th>
          </tr>
        </thead>
        <tbody>
          {sessionn.length ? (
            sessionn.map((session, i) => (
              <tr key={i}>
                <td scope="row">{session.label}</td>
                <td>{session.start_date}</td>
                <td>{session.end_date}</td>
                <td>{session.teacher}</td>
                <td>{session.students}</td>
                <td>{session.subject}</td>
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

export default Sessions;
