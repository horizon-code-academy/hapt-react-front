import { FormattedMessage } from "react-intl";
import {
  Badge,
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarToggler,
  UncontrolledDropdown,
} from "reactstrap";
import User from "../@types/User";
import Avatar from "./parts/Avatar";
import SideBar from "./parts/SideBar";
import Users from "./pages/users/Users";
import Subjects from "./pages/subjects/Subjects";

const user = {
  firstName: "Malek",
  lastName: "Boubakri",
  roles: ["admin", "teacher"],
  avatar: "https://avatars.githubusercontent.com/u/22925467?s=40&v=4",
} as User;

function Dashboard() {
  return (
    <>
      <Navbar color="danger" expand="md" light>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar></Nav>
          <Nav>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                <Avatar user={user} />
              </DropdownToggle>
              <DropdownMenu style={{ right: 0 }}>
                <DropdownItem disabled>
                  {user.firstName} {user.lastName}
                  <br />
                  {user.roles.map((e) => (
                    <Badge style={{ marginRight: 5 }}>
                      <FormattedMessage id={"role." + e} />
                    </Badge>
                  ))}
                </DropdownItem>
                <DropdownItem>
                  <FormattedMessage id="profil" />
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <FormattedMessage id="logout" />
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      <SideBar user={user} />
      <Container fluid>
        <main>
          {/*<Users />*/}
          <Subjects />
        </main>
      </Container>
    </>
  );
}

export default Dashboard;
