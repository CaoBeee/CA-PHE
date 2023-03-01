import React from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import InsideCafe from "./pages/InsideCafe";
import LandingPage from "./pages/LandingPage";
import Menu from "./pages/Menu";
import OurAdvocacy from "./pages/OurAdvocacy";
import SeasonalDishes from "./pages/SeasonalDishes";

const App = () => {

    return (
        <Router>
            <Switch>
                <main>
                    <Route path="/" exact>
                        <LandingPage />
                    </Route>
                    <Route path="/Menu">
                        <Menu />
                    </Route>
                    <Route path="/Seasonal">
                        <SeasonalDishes />
                    </Route>
                    <Route path="/Inside">
                        <InsideCafe />
                    </Route>
                    <Route path="/FAQ">
                        <FAQ />
                    </Route>
                    <Route path="/About">
                        <AboutUs />
                    </Route>
                    <Route path="/Advocacy">
                        <OurAdvocacy />
                    </Route>
                </main>
            </Switch>
        </Router>
    );
}

export default App;
