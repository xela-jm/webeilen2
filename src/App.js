import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AsyncHomePage, AsyncSignUp} from "./util/AsyncRoutes";
import Header from "./components/layouts/headers/Header";

// css
import './lib/tShopCss.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={AsyncHomePage}/>
                    <Route exact path="/register" component={AsyncSignUp}/>
                </Switch>
            </div>
        )
    }
}

export default App;