import React from "react";
import { Link, Redirect, useHistory } from "react-router-dom";


const StickyNav = () => {

    const isLogged = !!localStorage.getItem("token");
    const history = useHistory();

    const logout = () => {
        localStorage.removeItem("token");
        history.push("/login");
      };

    return (
        <div className='nav'>
            <div>
                <h2 id='logo'>Life-Hacks</h2>
            </div>

            {isLogged ? (
                <div className='navbuttons' >
                    <Link to="/dashboard"><button>Dashboard</button></Link>
                    <Link><button onClick={logout}>Logout</button></Link>
                    <Link to="/userpage"><button>Profile</button></Link>
                </div>
            ) : (
            <div className='navbuttons'>
                <button href="#">About Us</button>
                <Link to='/signup'><button>Sign Up</button></Link>
                <Link to='/login'><button>Login</button></Link>
            </div>
            )}
        </div>
    );
};
export default StickyNav;
