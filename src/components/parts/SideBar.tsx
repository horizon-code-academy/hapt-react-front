import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faCalendar,
  faClipboard,
  faBook,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import "./SideBar.css";

const routes = [
  { key: "users", disabled: false, icon: faUsers },
  { key: "trainings", disabled: false, icon: faBook },
  { key: "sessions", disabled: true, icon: faCertificate },
  { key: "calendar", disabled: true, icon: faCalendar },
  { key: "tests", disabled: true, icon: faClipboard },
];

const SideBar = () => {
  const [activePage, setActivePage] = useState<string>("trainings");

  return (
    <div
      className="d-flex flex-column flex-shrink-0 text-dark bg-warning"
      style={{
        width: 260,
        height: "100vh",
        zIndex: 999,
        position: "fixed",
        top: 0,
      }}
    >
      <Nav vertical pills>
        <NavItem className="bg-dark text-white">
          <NavLink
            href="#"
            style={{
              fontSize: 24,
              fontWeight: "bold",
              height: 68,
              padding: 16,
            }}
          >
            Horizon Academy
          </NavLink>
        </NavItem>
        <br />
        {routes.map((e) => (
          <NavItem
            disabled={e.disabled}
            active={activePage === e.key}
            onClick={() => setActivePage(e.key)}
          >
            <NavLink
              disabled={e.disabled}
              active={activePage === e.key}
              href="#"
            >
              <FontAwesomeIcon icon={e.icon} style={{ marginRight: 10 }} />
              <FormattedMessage id={e.key} />
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </div>
  );
};

export default SideBar;
