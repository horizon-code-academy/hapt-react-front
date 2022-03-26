import axios from "axios";
import Session from "../../@types/Session";

export function getSessions(callback: (data: Session[]) => void) {
  axios
    .get("http://localhost:5000/session")
    .then(({ data }) => {
      callback(data);
    })
    .catch((e) => {
      console.error(e);
    });
}

export function addSession(session: any, callback: () => void) {
  axios
    .post("http://localhost:5000/session", session)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}

export function editSessions(session: Session, callback: () => void) {
  axios
    .put(`http://localhost:5000/session/${session}`, session)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}

export function deleteSessions(session: Session, callback: () => void) {
  axios
    .delete(`http://localhost:5000/session/${session}`)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}
