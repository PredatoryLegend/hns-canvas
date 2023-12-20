import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar">
    <NavLink to="/" activeClassName="active">Home</NavLink>
    <NavLink to="/about" activeClassName="active">About</NavLink>
    <NavLink to="/services" activeClassName="active">Services</NavLink>
    <NavLink to="/contact" activeClassName="active">Contact Us</NavLink>
  </nav>
);

export default NavBar;
