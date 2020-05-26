import React from 'react'

const PostCard = props => {
    return (
        <div className="postcard">
            <div className="halfCard">
            <h1>{props.post.title}...</h1>
            <h3>{props.post.description}!</h3>
            </div>
            <div className="hackBody">
                <h2>Tutorial</h2>
            <strong><span>Materials Needed: {props.post.materials}</span></strong>
            <strong><p>How To: {props.post.instructions}</p></strong>
            <a href={props.post.video}>Walk Me Through It!</a>
            </div>
        </div>
    )
}
export default PostCard