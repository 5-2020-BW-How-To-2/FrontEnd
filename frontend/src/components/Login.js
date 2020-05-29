import React, { useState, useEffect } from "react";
import * as yup from "yup";
import "../components/Login.css";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/AxiosWithAuth";

let Login = () => {
    // State
    let history = useHistory();

    const [signUpFormState, setSignUpFormState] = useState({
        username: "",
        password: "",
    });
    // State for errors
    const [signUpErrors, setSignUpErrors] = useState({
        username: "",
        password: "",
    });
    // Button State
    const [buttonDisabled, setButtonDisabled] = useState(true);
    // Schema
    const signUpFormSchema = yup.object().shape({
        username: yup.string().required("Username is a required field."),
        password: yup
            .string()
            .min(6)
            .required("Password must have 6 characters"),
    });
    // Validation
    useEffect(() => {
        signUpFormSchema.isValid(signUpFormState).then((valid) => {
            setButtonDisabled(!valid);
        });
    }, [signUpFormState]);

    //   Event Handlers
    const inputChange = (e) => {
        e.persist();
        setSignUpFormState({
            ...signUpFormState,
            [e.target.name]: e.target.value,
        });
        validateChange(e);
    };

    const validateChange = (e) => {
        // Reach will allow us to "reach" into the schema and test only one part.
        yup.reach(signUpFormSchema, e.target.name)
            .validate(e.target.value)
            .then((valid) => {
                setSignUpErrors({
                    ...signUpErrors,
                    [e.target.name]: "",
                });
            })
            .catch((err) => {
                setSignUpErrors({
                    ...signUpErrors,
                    [e.target.name]: err.errors[0],
                });
            });
    };

    const signUpFormSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post(
                "https://clhowto.herokuapp.com/api/auth/login",
                signUpFormState,
            )
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user_id", res.data.id);
                history.push("/dashboard");
                window.location.reload()
                // reset form if successful
                setSignUpFormState({
                    username: "",
                    password: "",
                });
            })
            .catch((err) => console.log(err.response));
    };
    return (
        <div className='login-wrapper'>
            <h1>Login</h1>
            <form onSubmit={signUpFormSubmit}>
                <label htmlFor='username'>
                    <input
                        className='username-input'
                        type='text'
                        name='username'
                        value={signUpFormState.username}
                        onChange={inputChange}
                        placeholder='Username'
                    />
                    {signUpErrors.username.length > 0 ? (
                        <p className='error'>{signUpErrors.username}</p>
                    ) : null}
                </label>
                <br />
                <label htmlFor='password'>
                    <input
                        className='password-input'
                        type='password'
                        name='password'
                        value={signUpFormState.password}
                        onChange={inputChange}
                        placeholder='Password'
                    />
                    {signUpErrors.password.length > 0 ? (
                        <p className='error'>{signUpErrors.password}</p>
                    ) : null}
                </label>
                <button className='login-btn' disabled={buttonDisabled}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
