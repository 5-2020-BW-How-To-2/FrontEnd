import React from 'react'
import axiosWithAuth from '../utils/AxiosWithAuth'
import { Link } from 'react-router-dom'

const PostCard = props => {
    const deletePost = post => {
        axiosWithAuth()
        .delete(`https://clhowto.herokuapp.com/api/posts/${props.post.id}`)
          .then(res => {
            console.log(res)
            window.location.reload()
          })
      };
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
                <button onClick={deletePost}>x</button>
                <Link to="/updateForm"><button>Edit</button></Link>
                <h2>Tutorial</h2>
            <strong><p><span>Materials Needed: </span><br />{props.post.materials}</p></strong>
            <strong><p><span>How To: </span><br />{props.post.instructions}</p></strong>
            <button href={props.post.video}>Walk Me Through It!</button>
            </div>
        </div>
    )
}
export default PostCard