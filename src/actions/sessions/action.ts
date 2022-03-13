import axios from "axios";
import Session from "../../@types/Session";

export function getSession(callback: (data: Session[]) => void) {
  axios
    .get("http://localhost:3000/Session")
    .then(({ data }) => {
      callback(data);
    })
    .catch((e) => {
      console.error(e);
    });
}

export function addSession(session: Session, callback: () => void) {
  axios
    .post("http://localhost:3000/Session", session)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}

export function editSession(session: Session, callback: () => void) {
  axios
    .put(`http://localhost:3000/Session/${session._id}`, session)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}

export function deleteSession(session: Session, callback: () => void) {
  axios
    .delete(`http://localhost:3000/Session/${session._id}`)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}
