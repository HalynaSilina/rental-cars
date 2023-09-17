import { NavLink } from "react-router-dom";
import css from "./NavBar.module.css";

const NavBar = () => {
  return (
    <aside className={css.navbar}>
      <NavLink to="/" className={css.navButton}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={css.navButton}>
        Catalog
      </NavLink>
      <NavLink to="/favorites" className={css.navButton}>
        Favorites
      </NavLink>
    </aside>
  );
};

export default NavBar;
