import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/AxiosWithAuth";
import PostList from './PostList'

const Dashboard = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('api/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
    }, [])
    return (
        <div>
            <h1>Dashboard</h1>
            <PostList posts={posts} />
        </div>
    )
}
export default Dashboard