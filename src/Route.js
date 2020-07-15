import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import Productitem from './Components/Productitem';
import NavBar from './Components/Navbar';

function RouterConfig() {
    return (
        <div>
            <Router>
                <NavBar />  
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route exact path="/product" component={Product} />
                    <Route path="/product/:id" component={Productitem} />
                    <Route path="/*" component={() => <h2>404 Not Found</h2>} />
                </Switch>
            </Router>

        </div>

    );
}

export default RouterConfig;
