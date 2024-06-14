import "./nav.css";
import NavLink from './navcomp/navLinks' 
import { DropDown } from "./navcomp/navLinks";
import logo from "../../imgs/light-logo.svg"
import SecNav from './navcomp/offcanvas'
import NIcons from "./navcomp/navIcons";
import NBtn from "./navcomp/navBtn"
const Nav = () => { 
  return (
    <nav className="navbar navbar-expand-xl">
      <div className="container-xxl px-0">
          <a className="navbar-brand" href="#">
          <img src={logo}/>
        </a>
        <SecNav></SecNav>
    <div className="d-none d-xl-block" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <DropDown
              text="#"
              d1="home |" d2="home ||" d3="home |||"
              d1h="#" d2h="#" d3h="#"
              cu="block"
            >
                Home
        </DropDown>
        <NavLink text="#">
          our story
        </NavLink>
            <DropDown
              text="#"
              d1="faq" d2="our storys" d3="variety packs" d4="bulk orders" d5="404 error page" 
              d1h="#" d2h="#" d3h="#" d4h="#" d5h="#"
              cu="block" cu1="block" cu2="block"
            >
                pages
        </DropDown>
        
        <DropDown
              text="#"
              d1="Juice Listing" d2="Juice Single" d3="My account" d4="Cart" d5="Checkout" d6="Wishlist"
              d1h="#" d2h="#" d3h="#" d4h="#" d5h="#" d6h="#"
              cu1="block" cu2="block" cu3="block"
            >
                shop
        </DropDown>
        <DropDown
              text="#"
              d1="Blog Listing" d2="Blog Detail"
            >
                blogs
        </DropDown>
        <NavLink text="#">
          contact
        </NavLink>
          </ul>
    </div>
        <NIcons></NIcons>
        <NBtn></NBtn>
  </div>
</nav>
  );
}

export default Nav;