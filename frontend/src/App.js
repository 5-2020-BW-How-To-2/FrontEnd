import React from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import StickyNav from "./components/StickyNav";
import { Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./utils/PrivateRoute";
import UserPage from "./components/UserPage";

function App() {
    return (
        <div className='App'>
            <StickyNav />
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/userpage' component={UserPage} />
                <PrivateRoute path='/dashboard' component={Dashboard} />
            </Switch>
        </div>
    );
}

export default App;
