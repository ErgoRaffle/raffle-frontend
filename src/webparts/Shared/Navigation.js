import { memo } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../context";
import staticText from "../../statics";

const Navigation = memo(() => {
  return (<ThemeContext.Consumer>
    {({ hasWallet }) => (<ul className="navbar-nav nav-links ps-3 pt-3">
      {staticText.navigations.map((item, key) => (<li key={key + '-nav-items'} className="nav-item">
        <Link className="nav-link" to={item.link}>{item.title}</Link>
      </li>))}
      {
        hasWallet ?
          <li className="nav-item">
            <Link className="nav-link" to={"/dashboard"}>Dashboard</Link>
          </li> :
          null
      }
    </ul>)}
  </ThemeContext.Consumer>)
});

export default Navigation;