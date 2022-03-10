import User from "./User";

export default interface ExamTest {
  exam: String;
  sessionDate: Date;
  score?: number;
  note?: string;
  student: User;
}
