import { FormattedMessage } from "react-intl";
import { Badge, ButtonGroup, Table } from "reactstrap";
import UserEdit from "./UserEdit";
import UserAdd from "./UserAdd";
import UserDelete from "./UserDelete";
import { users } from "../../../test/users.fake";

const Users = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <FormattedMessage tagName="h1" id="page.title.users" />
        <UserAdd />
      </div>
      <Table bordered hover responsive striped>
        <thead>
          <tr>
            <th>
              <FormattedMessage id="user.firstName" />
              {" & "}
              <FormattedMessage id="user.lastName" />
            </th>
            <th>
              <FormattedMessage id="user.email" />
            </th>
            <th>
              <FormattedMessage id="user.phone" />
            </th>
            <th>
              <FormattedMessage id="user.roles" />
            </th>
            <th>
              <FormattedMessage id="user.actions" />
            </th>
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
                  <UserEdit user={user} />
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
