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
import User from "../../@types/User";

interface SideBarPropsType {
  user: User;
}

const routes = [
  {
    key: "users",
    disabled: false,
    icon: faUsers,
    access: (roles: string[]): boolean => roles.includes("admin"),
  },
  {
    key: "trainings",
    disabled: true,
    icon: faBook,
    access: (roles: string[]): boolean =>
      roles.includes("admin") || roles.includes("teacher"),
  },
  {
    key: "sessions",
    disabled: true,
    icon: faCertificate,
    access: (roles: string[]): boolean =>
      roles.includes("admin") || roles.includes("teacher"),
  },
  {
    key: "calendar",
    disabled: true,
    icon: faCalendar,
    access: (roles: string[]): boolean =>
      roles.includes("admin") ||
      roles.includes("teacher") ||
      roles.includes("student"),
  },
  {
    key: "tests",
    disabled: true,
    icon: faClipboard,
    access: (roles: string[]): boolean =>
      roles.includes("admin") ||
      roles.includes("teacher") ||
      roles.includes("student"),
  },
];

const SideBar = ({ user }: SideBarPropsType) => {
  const [activePage, setActivePage] = useState<string>(
    routes.filter((e) => e.access(user.roles))[0].key
  );

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
        <NavItem className="bg-dark text-center text-white">
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
        {routes.map((e) =>
          e.access(user.roles) ? (
            <NavItem disabled={e.disabled} active={activePage === e.key}>
              <NavLink
                disabled={e.disabled}
                active={activePage === e.key}
                href="#"
                onClick={() => setActivePage(e.key)}
              >
                <FontAwesomeIcon icon={e.icon} style={{ marginRight: 10 }} />
                <FormattedMessage id={"page." + e.key} />
              </NavLink>
            </NavItem>
          ) : (
            <></>
          )
        )}
      </Nav>
    </div>
  );
};

export default SideBar;
