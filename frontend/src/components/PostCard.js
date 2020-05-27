import React from 'react'

const PostCard = props => {
    return (
        <div className="newcardflex">
        <div className="postcard">
            <div className="halfCard">
            <h1>{props.post.title}...</h1>
            <h3>{props.post.description}!</h3>
            </div>
            </div>
            <div className="hackBody">
                <h2>Tutorial</h2>
            <strong><p>Materials Needed: {props.post.materials}</p></strong>
            <strong><p>How To: {props.post.instructions}</p></strong>
            <h2 id="incase">Incase you didnt follow..</h2>
            <button href={props.post.video}>Walk Me Through It!</button>
            </div>
        </div>
    )
}
export default PostCard