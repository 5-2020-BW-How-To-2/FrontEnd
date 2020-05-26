import React, { useState, useEffect } from "react";
import axiosWithAuth from "../Utils/AxiosWithAuth";
import PostList from "./PostList";

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
            <PostList posts={posts} />
        </div>
    );
};
export default Dashboard;
