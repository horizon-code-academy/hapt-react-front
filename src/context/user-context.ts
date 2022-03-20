import { createContext } from "react";
import User from "../@types/User";

const user = {
  firstName: "Malek",
  lastName: "Boubakri",
  roles: ["admin", "teacher"],
  avatar: "https://avatars.githubusercontent.com/u/22925467?s=40&v=4",
} as User;

export interface UserContextType {
  user?: User;
  isLoading: boolean;
}

export const UserContextDefaultValue: UserContextType = {
  user: user,
  isLoading: false,
};

export const UserContext = createContext<UserContextType>(
  UserContextDefaultValue
);
