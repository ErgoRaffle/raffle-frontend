import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home.js';
import FaqPage from '../pages/Faq/FaqPage.js';
import About from '../pages/About/About.js';
import Raffles from '../pages/Raffles.js';
import CreateRaffle from '../pages/CreateRaffle/CreateRaffle.js';
import Dashboard from '../pages/Dashboard/Dashboard.js';
import Raffle from '../pages/raffle/Raffle.js';
import Test from "../pages/Test";
import RefundPage from "../pages/Refund/RefundPage";

const Routes = () => {
    return (<>
        <Switch>
            <Route component={Test} path={'/test'} exact/>
            <Route component={Home} path={'/'} exact/>
            <Route component={FaqPage} path={'/faq'}/>
            <Route component={About} path={'/about'}/>
            <Route component={Dashboard} path={'/Dashboard'}/>
            <Route component={RefundPage} path={'/Refund'}/>
            <Route component={Raffles} path={'/raffle/list'}/>
            <Route component={CreateRaffle} path={'/raffle/create'}/>
            <Route component={Raffle} path={'/raffle/show/:id'}/>
        </Switch>
    </>)
}

export default Routes;
