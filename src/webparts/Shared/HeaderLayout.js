import MobileHeader from "./MobileHeader";

const HeaderLayout = ({ children, desktopHeaderRef, headerRef, wrapperRef, mobileHeaderRef }) => {
    return (<header>
        <div ref={desktopHeaderRef} className="fixed-top">
            <nav
                id="desktop-nav"
                className="
              d-none d-lg-flex
              navbar navbar-expand-lg navbar-light
              container
            "
            >
                <div className="container-fluid">
                    {children}
                </div>
            </nav>
        </div>
        <MobileHeader headerRef={headerRef} wrapperRef={wrapperRef} mobileHeaderRef={mobileHeaderRef} />
    </header>

    )
}

export default HeaderLayout;