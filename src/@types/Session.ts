import Subject from "./Subject";
import User from "./User";

export default interface Session {
  label: string;
  start_date: string;
  end_date: string;
  teacher: User[];
  students: User[];
  subject: Subject;
}
