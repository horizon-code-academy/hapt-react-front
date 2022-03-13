import axios from "axios";
import Subject from "../../@types/Subject";

export function getSubject(callback: (data: Subject[]) => void) {
  axios
    .get("http://localhost:3000/subject")
    .then(({ data }) => {
      callback(data);
    })
    .catch((e) => {
      console.error(e);
    });
}

export function addSubject(subject: Subject, callback: () => void) {
  axios
    .post("http://localhost:3000/subject", subject)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}

export function editSubject(subject: Subject, callback: () => void) {
  axios
    .put(`http://localhost:3000/subject/${subject._id}`, subject)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}

export function deleteSubject(subject: Subject, callback: () => void) {
  axios
    .delete(`http://localhost:3000/subject/${subject._id}`)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}
