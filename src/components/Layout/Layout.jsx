import { NavLink, Outlet } from "react-router-dom";
import {
  Header,
  HeaderDiv,
  LogoNavLink,
  NavigationLinks,
} from "./Layout.styled";
import LogoImg from "./../../img/log00.png";

function Layout() {
  return (
    <div>
      <Header>
        <HeaderDiv className="container">
          <LogoNavLink to="/">
            <img src={LogoImg} alt="Car logo" height={80} />
          </LogoNavLink>
          <NavigationLinks>
            <NavLink to="/catalog">Catalog</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
          </NavigationLinks>
        </HeaderDiv>
      </Header>
      <Outlet />
    </div>
  );
}

export default Layout;