import { FormattedMessage } from "react-intl";
import {
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown,
} from "reactstrap";
import User from "../@types/User";
import Avatar from "./parts/Avatar";
import SideBar from "./parts/SideBar";

const user = {
  avatar: "https://avatars.githubusercontent.com/u/22925467?s=40&v=4",
} as User;

function Dashboard() {
  return (
    <>
      <Navbar color="danger" expand="md" light>
        <NavbarBrand href="/">HAPT</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar></Nav>
          <Nav>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                <Avatar user={user} />
              </DropdownToggle>
              <DropdownMenu right>
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
      <SideBar />
      <Container fluid></Container>
    </>
  );
}

export default Dashboard;
