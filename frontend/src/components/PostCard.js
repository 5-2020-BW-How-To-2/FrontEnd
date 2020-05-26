import React from 'react'

const PostCard = props => {
    return (
        <div className="postcard">
            <h2>{props.post.title}</h2>
            <p>{props.post.description}</p>
            <p>Materials Needed: {props.post.materials}</p>
            <p>How To: {props.post.instructions}</p>
            <a href={props.post.video}><p>Walk Me Through It!</p></a>
        </div>
    )
}
export default PostCard