import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
      <NavLink to="/catalog">Catalog</NavLink>
    </nav>
  );
};

export default NavBar;
