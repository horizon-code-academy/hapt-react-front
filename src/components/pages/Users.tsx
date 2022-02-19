import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormattedMessage } from "react-intl";
import { Button, ButtonGroup, Table } from "reactstrap";
import { faTrash, faAdd, faPen } from "@fortawesome/free-solid-svg-icons";

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
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Roles</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark Otto</td>
            <td>malek@gmail.com</td>
            <td>+216 34 555 777</td>
            <td>Admin, Teacher</td>
            <td>
              <ButtonGroup>
                <Button color="warning">
                  <FontAwesomeIcon icon={faPen} />
                </Button>
                <Button color="danger">
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </ButtonGroup>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob Thornton</td>
            <td>@fat</td>
            <td>+216 34 555 777</td>
            <td>Admin, Teacher</td>
            <td>
              <ButtonGroup>
                <Button color="warning">
                  <FontAwesomeIcon icon={faPen} />
                </Button>
                <Button color="danger">
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </ButtonGroup>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>+216 34 555 777</td>
            <td>Admin, Teacher</td>
            <td>
              <ButtonGroup>
                <Button color="warning">
                  <FontAwesomeIcon icon={faPen} />
                </Button>
                <Button color="danger">
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </ButtonGroup>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Users;
