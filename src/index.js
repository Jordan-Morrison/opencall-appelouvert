import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import './index.css';
import App_EN from './App_EN';
import App_FR from './App_FR';
import * as serviceWorker from './serviceWorker';

if (document.documentElement.lang === "fr"){
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <Route exact path="/" component={App_FR} />
                <Route path="/about" component={() => <App_FR aboutPage={true}/>}/>
                <Route path="/how-we-vet-projects" component={() => <App_FR vetGuidePage={true}/>}/>
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
else {
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <Route exact path="/" component={App_EN} />
                <Route path="/about" component={() => <App_EN aboutPage={true}/>}/>
                <Route path="/how-we-vet-projects" component={() => <App_EN vetGuidePage={true}/>}/>
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
