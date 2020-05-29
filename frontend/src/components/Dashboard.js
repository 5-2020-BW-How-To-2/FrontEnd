import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosWithAuth from "../utils/AxiosWithAuth";
import PostList from "./PostList";
import AddHackForm from "./AddHackForm";
import UserPage from "./UserPage";

const Dashboard = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get("https://clhowto.herokuapp.com/api/posts")
            .then((res) => {
                console.log(res);
                setPosts(res.data);
            });
    }, []);
    return (
        <div className='hacksBody'>
            <div className="banner">
                <p>Welcome to Popular Life-Hacks! Use your Profile to submit Life-Hacks to be added to the Popular Page!</p>
            </div>
            <PostList posts={posts} />
        </div>
    );
};
export default Dashboard;
