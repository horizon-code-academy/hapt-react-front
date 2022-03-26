import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Table } from "reactstrap";
import Session from "../../../@types/Session";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import SessionAdd from "./SessionAdd";
import { getSessions } from "../../../actions/sessions/action";

const SessionA = () => {
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    getSessions(setSessions); // aka setSessions(data)
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between">
        <FormattedMessage tagName="h1" id="page.title.session" />
        <SessionAdd refresh={() => getSessions(setSessions)} />
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
          {sessions.length ? (
            sessions.map((session, i) => (
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
              <td colSpan={6} className="text-center p-5">
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

export default SessionA;
