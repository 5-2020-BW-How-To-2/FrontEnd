import React, { useState, useEffect } from "react";
import axiosWithAuth from '../utils/AxiosWithAuth'
import PostList from "./PostList";
import AddHackForm from './AddHackForm'

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
            <h1 id='popular'>Popular Life Hacks!</h1>
            <AddHackForm posts={posts} setPosts={setPosts} />
            <PostList posts={posts} />
        </div>
    );
};
export default Dashboard;
