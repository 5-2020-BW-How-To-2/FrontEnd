import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axiosWithAuth from '../utils/AxiosWithAuth'
import PostList from "./PostList";
import AddHackForm from './AddHackForm'
import UserPage from './UserPage'

const Dashboard = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get("api/posts")
            .then((res) => {
                console.log(res);
                setPosts(res.data);
            });
    }, []);
    return (
        <div className='hacksBody'>
            <Link to="/userpage"><button>Profile</button></Link>
            <Route path='/userpage' render={() => <UserPage posts={posts} setPosts={setPosts} />} />
            <PostList posts={posts} />
            
        </div>
    );
};
export default Dashboard;
