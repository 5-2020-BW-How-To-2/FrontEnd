import React from "react";
import { Switch, Route, Link } from "react-router-dom";

const StickyNav = () => {
    return (
        <div className='nav'>
            <div>
                <h2 id='logo'>Life-Hacks</h2>
            </div>
            <div className='navbuttons'>
                <button to='/dashboard'>Home</button>

                <Link to='/signup'>
                    <button>Sign Up</button>
                </Link>
                <Link to='/login'>
                    <button>Login</button>
                </Link>
                <Link to='/dashboard'>
                    <button>TEST FOR DASH</button>
                </Link>
            </div>
        </div>
    );
};
export default StickyNav;
