import "./UserUI.scss";
import { Image, Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserUI = ({ user, logOut }) => {

  const closeSession = () => {
    logOut();
  };

  return (
    <>
      {user !== undefined && (
        <div className="userUI-container d-flex justify-content-center mx-3">
          <Image src={user?.image} className="userUI-image" roundedCircle />
          <DropdownButton
            id="dropdown-basic-button"
            className="userUI-name"
            variant="outline-warning"
            title={user?.name}
          >
            <Dropdown.Item as={Link} to="/orders">
              Mis Compras
            </Dropdown.Item>
            <Dropdown.Item onClick={() => closeSession()} as={Link} to="/">
              Cerrar Sesión
            </Dropdown.Item>
          </DropdownButton>
        </div>
      )}
    </>
  );
};

export default UserUI;
