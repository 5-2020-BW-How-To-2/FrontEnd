import React from 'react'

const PostCard = props => {
    return (
        <div className="newcardflex" >
        <div className="postcard" >
            <div className="halfCard">
            <h1>{props.post.title}...</h1>
            <h3>{props.post.description}!</h3>
            <strong><p>...Hack your life!</p></strong>
            </div>
            </div>
            <div className="hackBody" key={props.post.id}>
                <h2>Tutorial</h2>
            <strong><p><span>Materials Needed: </span><br />{props.post.materials}</p></strong>
            <strong><p><span>How To: </span><br />{props.post.instructions}</p></strong>
            <button href={props.post.video}>Walk Me Through It!</button>
            </div>
        </div>
    )
}
export default PostCard