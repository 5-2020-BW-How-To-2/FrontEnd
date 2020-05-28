import React, { useState, useEffect } from "react";
import * as yup from "yup";
import "../components/Login.css";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/AxiosWithAuth";

let SignUp = () => {
    // State
    let history = useHistory();

    const [loginFormState, setLoginFormState] = useState({
        username: "",
        password: "",
    });
    // State for errors
    const [loginErrors, setLoginErrors] = useState({
        username: "",
        password: "",
        login: "Invalid Username or Password",
    });
    // Button State
    const [buttonDisabled, setButtonDisabled] = useState(true);
    // Schema
    const loginFormSchema = yup.object().shape({
        username: yup.string().required("Username is a required field."),
        password: yup
            .string()
            .min(6)
            .required("Password must have 6 characters"),
    });
    // Validation

    useEffect(() => {
        loginFormSchema.isValid(loginFormState).then((valid) => {
            setButtonDisabled(!valid);
        });
    }, [loginFormState]);

    //   Event Handlers
    const inputChange = (e) => {
        // validateChange(e);
        setLoginFormState({ ...loginFormState, [e.target.name]: e.target.value });
    };

    const validateChange = (e) => {
        // Reach will allow us to "reach" into the schema and test only one part.
        yup.reach(loginFormSchema, e.target.name)
            .validate(e.target.value)
            .then((valid) => {
                setLoginErrors({
                    ...loginErrors,
                    [e.target.name]: "",
                });
            })
            .catch((err) => {
                setLoginErrors({
                    ...loginErrors,
                    [e.target.name]: err.errors[0],
                });
            });
    };

    const loginFormSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post("https://clhowto.herokuapp.com/api/auth/register", loginFormState)
            .then((res) => {
                console.log("loginFormState-actually Signup", loginFormState);
                history.push("/login");
                // reset form if successful
                setLoginFormState({
                    username: "",
                    password: "",
                });
            })
            .catch((err) => console.log(err.response));
    };
    return (
        <div className='login-wrapper'>
            <h1>Sign Up</h1>
            <form onSubmit={loginFormSubmit}>
                <label htmlFor='username'>
                    <input
                        className='username-input'
                        type='text'
                        name='username'
                        value={loginFormState.username}
                        onChange={inputChange}
                        placeholder='Username'
                        id='username'
                    />
                    {loginErrors.username.length > 0 ? (
                        <p className='error'>{loginErrors.username}</p>
                    ) : null}
                </label>
                <br />
                <label htmlFor='password'>
                    <input
                        className='password-input'
                        type='password'
                        name='password'
                        value={loginFormState.password}
                        onChange={inputChange}
                        placeholder='Password'
                        id='password'
                    />
                    {loginErrors.password.length > 0 ? (
                        <p className='error'>{loginErrors.password}</p>
                    ) : null}
                </label>
                <button className='login-btn2' disabled={buttonDisabled}>
                    Sign Up!
                </button>
                <br />
                Have an account? <a href='/login'>Login</a>
            </form>
        </div>
    );
};

export default SignUp;
