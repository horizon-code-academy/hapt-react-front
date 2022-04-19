import Session from "./Session";
import User from "./User";

export default interface ExamTest {
  _id?: string;
  exam: String;
  sessionDate: Session[];
  score?: number;
  note?: string;
  student: User;
}
