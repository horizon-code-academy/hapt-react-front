import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Badge, ButtonGroup, Table } from "reactstrap";
import SessionEdit from "./SessionEdit";
import SessionAdd from "./SessionAdd";
import SessionDelete from "./SessionDelete";
import Session from "../../../@types/Session";
import { getSession } from "../../../actions/sessions/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";


const Sessions = () => {
    const [sessions, setSessions] = useState<Session[]>([]);
    return (
      <>
        <div className="d-flex justify-content-between">
          <FormattedMessage tagName="h1" id="page.title.sessions" />
          <SessionAdd refresh={() => getSession(setSessions)} />
        </div>
        <Table bordered hover responsive striped>
          <thead>
            <tr>
              <th>
                <FormattedMessage id="session.name" />
              </th>
              <th>
                <FormattedMessage id="session.start-date" />
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
              <th>
                <FormattedMessage id="session.actions" />
              </th>
            </tr>
          </thead>
          <tbody>
            {sessions.length ? (
              sessions.map((session, i) => (
                <tr key={i}>
                  <td scope="row">{session.name}</td>
                  <td>{session.start_date}</td>
                  <td>{session.end_date}</td>
                  <td>{session.teacher}</td>
                  <td>{session.students}</td>
                  <td>{session.subject}</td>
                  <td>
                    <ButtonGroup>
                      <SessionEdit
                        session={session}
                        refresh={() => getSession(setSessions)}
                      />
                      <SessionDelete
                        session={session}
                        refresh={() => getSession(setSessions)}
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
  

export default Sessions;