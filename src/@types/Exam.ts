import Subject from "./Subject";
import ExamTest from "./Tests";

export default interface Exam {
  _id?: string;
  label: string;
  type: string;
  subject: Subject;
  examTests?: ExamTest[];
}
