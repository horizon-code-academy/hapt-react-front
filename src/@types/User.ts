export default interface User {
  email: string;
  password: string;
  phone: string;
  roles: string[];
  firstName: string;
  lastName: string;
  birthDay?: Date;
  address?: string;
  avatar?: string;
}
