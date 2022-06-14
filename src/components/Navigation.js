import { Link } from "react-router-dom";
import staticText from "../statics";

const Navigation = () => {
  return (<ul className="navbar-nav nav-links ps-3 pt-3">
    {
      staticText.navigations.map((item, key) =>
      (
        <li key={key + '-navigation'} className="nav-item nav-item-offcanvas py-3">
          <Link className="nav-link nav-link-offcanvas" to={item.link}>{item.title}</Link>
        </li>
      )
      )
    }
  </ul>
  )
}

export default Navigation;