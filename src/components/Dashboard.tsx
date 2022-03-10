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
import User from "../@types/User";
import Avatar from "./parts/Avatar";
import SideBar from "./parts/SideBar";
import Users from "./pages/users/Users";
import Subjects from "./pages/subjects/Subjects";
import { useEffect, useState } from "react";
import axios from "axios";

const user = {
  firstName: "Malek",
  lastName: "Boubakri",
  roles: ["admin", "teacher"],
  avatar: "https://avatars.githubusercontent.com/u/22925467?s=40&v=4",
} as User;

function Dashboard() {
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/user")
      .then(() => setError(false))
      .catch(() => setError(true));
  });

  return error ? (
    <h1>"error open api" </h1>
  ) : (
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
                <DropdownItem onClick={() => navigate("/")}>
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
            <Route path="/users" element={<Users />} />
            <Route path="/trainings" element={<Subjects />} />
          </Routes>
        </main>
      </Container>
    </>
  );
}

export default Dashboard;
