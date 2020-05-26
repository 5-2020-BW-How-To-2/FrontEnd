import React, { useState } from "react";
import axiosWithAuth from "../Utils/AxiosWithAuth";
import { useHistory } from "react-router-dom";
import PostCard from "./PostCard";

const PostList = (props) => {
    return (
        <div>
            {props.posts.map((post) => {
                return <PostCard post={post} key={post.id} />;
            })}
        </div>
    );
};
export default PostList;
