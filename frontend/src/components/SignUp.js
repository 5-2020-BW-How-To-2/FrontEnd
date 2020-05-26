import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import "../components/Login.css";

let SignUp = () => {
    // State

    const [loginFormState, setLoginFormState] = useState({
        username: "",
        password: "",
    });
    // State for errors
    const [loginErrors, setLoginErrors] = useState({
        username: "",
        password: "",
    });
    // Button State
    const [buttonDisabled, setButtonDisabled] = useState(true);
    // login Post State
    const [loginPost, setLoginPost] = useState([]);

    // Schema
    const loginFormSchema = yup.object().shape({
        username: yup.string().required("Username is a required field."),
        password: yup.string().min(6).required("Must have a Password."),
    });
    // Validation

    useEffect(() => {
        loginFormSchema.isValid(loginFormState).then((valid) => {
            setButtonDisabled(!valid);
        });
    }, [loginFormState]);

    //   Event Handlers
    const inputChange = (e) => {
        e.persist();
        const newLoginFormData = {
            ...loginFormState,
            [e.target.name]:
                e.target.type === "checkbox"
                    ? e.target.checked
                    : e.target.value,
        };

        validateChange(e);
        setLoginFormState(newLoginFormData);
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
        axios
            .post("https://reqres.in/api/users", loginFormState)
            .then((res) => {
                setLoginPost(res.data); // get just the form data from the REST api
                console.log("success", loginPost);
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
            <h1>Sign Up Below!</h1>
            <form onSubmit={loginFormSubmit}>
                <label htmlFor='username'>
                    {loginErrors.username.length > 0 ? (
                        <p className='error'>{loginErrors.username}</p>
                    ) : null}
                    Username
                    <input
                        type='text'
                        name='username'
                        value={loginFormState.username}
                        onChange={inputChange}
                        id='username'
                    />
                </label>
                <br />
                <label htmlFor='password'>
                    {loginErrors.password.length > 0 ? (
                        <p className='error'>{loginErrors.password}</p>
                    ) : null}
                    Password
                    <input
                        type='password'
                        name='password'
                        value={loginFormState.password}
                        onChange={inputChange}
                        id='password'
                    />
                </label>
                <pre>{JSON.stringify(loginPost, null, 2)}</pre>
                <button disabled={buttonDisabled}>Sign Up!</button>
            </form>
        </div>
    );
};

export default SignUp;
