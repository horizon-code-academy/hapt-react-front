import Session from "./Session";
import User from "./User";

export default interface ExamTest {
  exam: String;
  sessionDate: Session[];
  score?: number;
  note?: string;
  student: User;
}
