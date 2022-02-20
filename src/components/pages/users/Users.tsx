import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormattedMessage } from "react-intl";
import { Badge, Button, ButtonGroup, Table } from "reactstrap";
import { faAdd, faPen } from "@fortawesome/free-solid-svg-icons";
import UserDelete from "./UserDelete";
//import { users } from "../../../test/users.fake";

const Users = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <FormattedMessage tagName="h1" id="page.title.users" />
        <Button color="success" size="lg" className="mb-2">
          <FormattedMessage id="page.users.add" />{" "}
          <FontAwesomeIcon icon={faAdd} />
        </Button>
      </div>
      <Table bordered hover responsive striped>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Roles</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td scope="row">
                {user.firstName} {user.lastName}
              </td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                {user.roles.map((e) => (
                  <Badge style={{ marginRight: 5 }}>
                    <FormattedMessage id={"role." + e} />
                  </Badge>
                ))}
              </td>
              <td>
                <ButtonGroup>
                  <Button color="warning">
                    <FontAwesomeIcon icon={faPen} />
                  </Button>
                  <UserDelete user={user} />
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Users;
