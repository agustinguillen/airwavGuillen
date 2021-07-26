import './UserUI.scss'
import { Image, Dropdown, DropdownButton } from 'react-bootstrap'

const UserUI = ({user, logOut}) =>{

    const closeSession = () =>{
        logOut()
    }

    return (
        <>
            <div className="userUI-container d-flex justify-content-center">
                <Image src={user.image} className="userUI-image" roundedCircle />
                <DropdownButton id="dropdown-basic-button" 
                                className="userUI-name"
                                variant="outline-warning" 
                                title={user.name}>
                    <Dropdown.Item href="#/action-1">Mis Compras</Dropdown.Item>
                    <Dropdown.Item onClick={()=>closeSession()}>Cerrar Sesión</Dropdown.Item>
                </DropdownButton>
            </div>
        </>
    )
}

export default UserUI