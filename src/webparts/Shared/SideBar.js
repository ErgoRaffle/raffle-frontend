import React, { useContext } from "react";
import Navigation from './Navigation';
import ThemeContext, { DARK_THEME, LIGHT_THEME } from "../../context";

const SideBar = () => {
    const context = useContext(ThemeContext);
    const toggleMode = (e) => {
        e.preventDefault();
        toggleNight();
    }
    const toggleNight = function () {
        if(context.theme === DARK_THEME){
            context.setTheme(LIGHT_THEME)
        }else{
            context.setTheme(DARK_THEME)
        }
    };
    return (
        <section id="offcanvas-sidebar">
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="sidebar" aria-labelledby="sidebar-label">
                <Navigation/>
                <div className="night-mode-btn-offcanvas text-center mt-5">
                    <button
                        className="night-mode-link night-mode-link-offcanvas"
                        rel="noreferrer"
                        id="night-mode"
                        onClick={toggleMode}>
                        <span className="icon-moon"/>
                        Night Mode
                    </button>
                </div>
            </div>
        </section>)
};

export default SideBar;
