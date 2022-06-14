import { useEffect, useState, useRef, useCallback, useContext } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ErrorBoundary } from 'react-error-boundary'
import ThemeContext, { DARK_THEME, LIGHT_THEME } from '../context';
import { getInfo } from '../service/info.service';
import WalletModal from '../webparts/Modal/WalletModal';
import Footer from '../webparts/Shared/Footer';
import Header from '../webparts/Shared/Header';
import SideBar from '../webparts/Shared/SideBar';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const ScrollTop = () => {
    const context = useContext(ThemeContext);
    const {pathname} = useLocation();
    const scrollToTop = useCallback(() => {
        context.wrapperRef.current.scrollTo(0, 0);
    }, [context.wrapperRef])
    useEffect(() => {
        scrollToTop()
    }, [pathname, scrollToTop]);
    return (null);
}

const Layout = ({children}) => {
    const [hasWallet, setHasWallet] = useState((window.localStorage.getItem('wallet') !== null &&
        typeof window.localStorage.getItem('wallet') !== 'undefined') ?
        window.atob(window.localStorage.getItem('wallet')) :
        '');
    const wrapperRef = useRef();
    const [theme, setTheme] = useState(window.localStorage.getItem('theme') !== null ?
        window.localStorage.getItem('theme') === DARK_THEME ?
            DARK_THEME :
            LIGHT_THEME :
        LIGHT_THEME);
    const [info, setInfo] = useState({
        "pubKey": "not-set",
        "required": false,
        "height": 83670,
        supportUrl: '',
        "serviceFee": 5
    });
    const [pinnedRaffles, setPinnedRaffles] = useState([]);
    const debounce = require('lodash.debounce');
    const headerRef = useRef();
    const notify = (msg) => toast(msg);
    const fetchInfo = useCallback(() => {
        getInfo().then(
            ({data}) => {
                setInfo(data);
            }
        )
    }, [])
    const ErrorFallback = () => {
        notify('Something Goes Wrong! Please Try Again Later');
    }

    useEffect(() => {
        fetchInfo();
    }, [fetchInfo])
    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme,
            wrapperRef,
            info,
            hasWallet,
            setHasWallet,
            pinnedRaffles,
            setPinnedRaffles
        }}>
            <div id="main-content-all-wrapper" ref={wrapperRef}
                 onScroll={debounce((e) => headerRef.current.handleScroll(e), 100)}>
                <Router>
                    <SideBar/>
                    <Header ref={headerRef} walletPassed={hasWallet}/>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        {children}
                    </ErrorBoundary>
                    <Footer/>
                    <ScrollTop/>
                </Router>
            </div>
            <WalletModal walletProp={hasWallet}/>
            <div id="finish-modal"/>
            <div id="share-modal"/>
            <ToastContainer/>
        </ThemeContext.Provider>
    )
};

export default Layout;
