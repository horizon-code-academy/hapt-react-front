import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// I18n
import en from "./i18n/en.json";
import fr from "./i18n/fr.json";
import ar from "./i18n/ar.json";

interface Messages {
  "login.title": string;
  "login.subtitle": string;
}
interface I18n {
  en: Record<string, string>;
  fr: Record<string, string>;
  ar: Record<string, string>;
}

const allMessages: I18n = { en, fr, ar };
const userLang: string = navigator.language.slice(0, 2);
// @ts-ignore
const messages: Record<string, string> = allMessages[userLang];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <IntlProvider messages={messages} locale="fr" defaultLocale="en">
        <App />
      </IntlProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector("#hapt-root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
