import axios from "axios";

export function login(
  email: string,
  pass: string,
  callback: (data: any) => void,
  fallback: () => void
) {
  axios
    .post("http://localhost:5000/auth/login", {
      username: email,
      password: pass,
    })
    .then(({ data }) => {
      callback(data);
    })
    .catch((e) => {
      console.error(e);
      fallback();
    });
}
