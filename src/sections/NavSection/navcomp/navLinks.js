import '../nav.css'

const NavLink = (props) => {
  return (
    <li className="nav-item">
      <a className="nav-link" aria-current="page" href={props.text}>{props.children}</a>
    </li>);
}

const DropDown = (props) => {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href={props.text} role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.children}
      </a>
    <ul className="dropdown-menu">
            <li><a className="dropdown-item" href={props.d1h}>{props.d1}</a></li>
            <li><a className="dropdown-item" href={props.d2h}>{props.d2}</a></li>
            <li style={{display : props.cu || "none"}}><a className="dropdown-item" href={props.d3h}>{props.d3}</a></li>
            <li style={{display : props.cu1 || "none"}}><a className="dropdown-item" href={props.d4h}>{props.d4}</a></li>
            <li style={{display : props.cu2 || "none"}}><a className="dropdown-item" href={props.d5h}>{props.d5}</a></li>
            <li style={{display : props.cu3 || "none"}}><a className="dropdown-item" href={props.d6h}>{props.d6}</a></li>
          </ul>
          </li>
  );
}

const Offensev = () => {
  return (
    <>
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
    </>
  );
}

export default NavLink;
export { DropDown , Offensev };