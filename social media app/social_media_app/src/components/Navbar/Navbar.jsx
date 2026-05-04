
import {
  Link } from "react-router-dom";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from 'react-router-dom';

export default  function AppNavbar() {
  const {token,setToken,UserData} = useContext(AuthContext)
  const {name , email } = UserData /* user data become from Api   
  in first it is undifiend and we can not destruct this const {name , email } from it */
    || {}  // return first true . , const{} =  truthy value
    console.log(UserData)
  function logOut()
  {
    localStorage.removeItem("token")
    setToken(null)
      setTimeout(() => {
        navigate('/Login'); 
      }, 500);
  }
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      {token && <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">{name}</span>
            <span className="block truncate text-sm font-medium">{email}</span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem onClick={logOut}>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>}
      <NavbarCollapse>
      {token ? <>
        <NavbarLink as={Link} to="/" active >
          Posts
        </NavbarLink>
        <NavbarLink as={Link} to="/profile">
          Profile
        </NavbarLink></> :
         <>
           <NavbarLink as={Link} to="/Register">
          Register
        </NavbarLink>
         <NavbarLink as={Link} to="/login">
          Login
        </NavbarLink>
         </>}
      
       
      
      </NavbarCollapse>
    </Navbar>
  );
}
