import { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
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
import Avatar from "./parts/Avatar";
import SideBar from "./parts/SideBar";
import Users from "./pages/users/Users";
import Subjects from "./pages/subjects/Subjects";
import Exam from "./pages/teste/Exam";
import { UserContext } from "../context/user-context";

function Dashboard(props: any) {
  const navigate = useNavigate();
  const { user, isLoading } = useContext(UserContext);

  return user && !isLoading ? (
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
                    <Badge key={e} style={{ marginRight: 5 }}>
                      <FormattedMessage id={"role." + e} />
                    </Badge>
                  ))}
                </DropdownItem>
                <DropdownItem>
                  <Link to="/profil">
                    <FormattedMessage id="profil" />
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem
                  onClick={() => {
                    props.goToLogin();
                    navigate("/");
                  }}
                >
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
          <Routes>
            <Route path="" element={<Users />} />
            <Route path="users" element={<Users />} />
            <Route path="trainings" element={<Subjects />} />
            <Route path="tests" element={<Exam />} />
          </Routes>
        </main>
      </Container>
    </>
  ) : (
    <>Loading...</>
  );
}

export default Dashboard;
