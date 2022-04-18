import axios from "axios";
import Exam from "../../@types/Exam";

export function getExams(callback: (data: Exam[]) => void) {
  axios
    .get("http://localhost:5000/exam")
    .then(({ data }) => {
      callback(data);
    })
    .catch((e) => {
      console.error(e);
    });
}

export function addExam(exam: any, callback: () => void) {
  axios
    .post("http://localhost:5000/exam", exam)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}

export function editExams(exam: Exam, callback: () => void) {
  axios
    .put(`http://localhost:5000/exam/${exam._id}`, exam)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}

export function deleteExams(exam: Exam, callback: () => void) {
  axios
    .delete(`http://localhost:5000/exam/${exam._id}`)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}
