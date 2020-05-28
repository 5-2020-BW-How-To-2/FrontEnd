import React, { useState } from 'react'
import axiosWithAuth from '../utils/AxiosWithAuth'
import { useHistory } from 'react-router-dom'

const PostCard = props => {

    const { push } = useHistory()

    const [editing, setEditing] = useState(false);
    const [postToEdit, setPostToEdit] = useState({
        user_id: "1",
        title: "",
        description: "",
        materials: "",
        instructions: "",
    });
    const editPost = post => {
        setEditing(true);
        setPostToEdit(post);
    };

    const saveEdit = e => {
        e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
        console.log("color to edit", postToEdit)
        axiosWithAuth()
        .put(`https://clhowto.herokuapp.com/api/posts/${props.post.id}`, postToEdit)
        .then(res => {
         console.log(res.data);
         window.location.reload()
        push("/dashboard");
      })
  };

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
                <button onClick={deletePost} id="x">x</button>
                <button onClick={() => editPost(props.post.id)} id="edit">e</button>

                {editing && (
        <form onSubmit={saveEdit} className="editForm">
          <legend>Edit</legend>
          <label>
            Post Title:
            <input
              onChange={e =>
                setPostToEdit({ ...postToEdit, title: e.target.value })
              }
              value={postToEdit.title}
            />
          </label>
          <br />
          <label>
            description:
            <input
              onChange={e =>
                setPostToEdit({
                  ...postToEdit, description: e.target.value})
              }
              value={postToEdit.description}
            />
          </label>
              <br />
          <label>
            materials:
            <input
              onChange={e => setPostToEdit({ ...postToEdit, materials: e.target.value })}
              value={postToEdit.materials}
            />
          </label>
          <br />
          <label>
            instructions:
            <input
              onChange={e =>
                setPostToEdit({
                  ...postToEdit, instructions: e.target.value})
              }
              value={postToEdit.instructions}
            />
          </label>
          <div>
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}

                <h2>Tutorial</h2>
            <strong><p><span>Materials Needed: </span><br />{props.post.materials}</p></strong>
            <strong><p><span>How To: </span><br />{props.post.instructions}</p></strong>
            <button href={props.post.video}>Walk Me Through It!</button>
            </div>
        </div>
    )
}
export default PostCard