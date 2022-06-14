import { memo, useContext } from "react";
import { Link } from "react-router-dom";
import staticText from "../../statics";
import logo from '../../assets/img/logo.png'
import logoDark from '../../assets/img/logo-dark.png'
import ThemeContext, { DARK_THEME } from "../../context";

const Footer = memo(() => {
    const context = useContext(ThemeContext);
    return (<footer>
        <div className="container">
            <div className="footer-body">
                <div className="orange-circle orange-circle6"/>
                <div className="orange-circle orange-circle7"/>
                <div className="footer-body-branding p-lg-5 p-3 mb-4">
                    <Link className="navbar-brand mt-2 me-0 mt-lg-0" to={"/"}>
                        <span><img src={context.theme === DARK_THEME ? logoDark : logo} alt={'footer logo'}/></span>
                    </Link>
                    <div className="footer-links mt-3 pt-3">
                        {staticText.privateLink.map((item, key) => (
                            <a
                                key={key + '-footer-elem'}
                                className="nav-link nav-link-offcanvas"
                                href={item.link}>
                                {item.title}
                            </a>))
                        }
                    </div>
                    <div className="footer-links footer-sublinks mt-4">
                        {staticText.publicLink.map((item, index) => (
                            <a
                                key={index}
                                target="_blank"
                                className="nav-link nav-sublink"
                                href={item.link}>
                                {item.title}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="footer-copyright text-center mb-4">
                    <h6>Copyright &copy; ErgoRaffle 2021</h6>
                </div>
            </div>
        </div>
    </footer>)
})

export default Footer;
