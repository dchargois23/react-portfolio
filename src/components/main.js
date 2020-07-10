import React from 'react';
import { Switch, Main } from 'react-router-dom';

import SplashPage from './splashPage';
import About from './about';
import Contact from './contact';
import Portfolio from './portfolio';
import Resume from './resume';


const Route = () => (
    <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
    </Switch>
)

export default Main;