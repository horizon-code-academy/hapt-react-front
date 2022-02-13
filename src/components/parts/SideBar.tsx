import { FormattedMessage } from "react-intl";
import { Nav, NavItem, NavLink } from "reactstrap";

const SideBar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 text-dark bg-warning"
      style={{
        width: 280,
        height: "100vh",
        zIndex: 999,
        position: "fixed",
        top: 0,
      }}
    >
      <Nav vertical>
        <NavItem className="bg-dark text-white">
          <NavLink
            href="#"
            style={{ fontSize: 24, fontWeight: "bold", padding: 16 }}
          >
            Horizon Academy
          </NavLink>
        </NavItem>
        <NavItem active>
          <NavLink href="#">
            <FormattedMessage id="users" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            <FormattedMessage id="trainings" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            <FormattedMessage id="sessions" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            <FormattedMessage id="calendar" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            <FormattedMessage id="tests" />
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default SideBar;
