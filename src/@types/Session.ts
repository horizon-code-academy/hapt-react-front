import Subject from "./Subject";
import User from "./User";

export default interface Session {
  label: string;
  start_date: Date;
  end_date: Date;
  teacher: User[];
  students: User[];
  subject: Subject;
}
