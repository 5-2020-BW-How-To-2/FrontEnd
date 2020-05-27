import React, { useState } from 'react'
import AxiosWithAuth from "../utils/AxiosWithAuth";

const AddHackForm = props => {
    const [newHack, setNewHack] = useState({
        user_id: "1",
        title: '',
        description: '',
        materials: '',
        instructions: '',
        video: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        AxiosWithAuth()
        .post("api/posts", newHack)
        .then((res) => {
            props.setPosts(res.data)
            console.log('this is the new hack data', res.data)
        })
    }

    const refresh = () => {
        window.location.reload(false)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Whats your big idea!</h3>
                <label>Life-Hack</label>
                <br />
                <input 
                type="text"
                name="title"
                placeholder="hack"
                onChange={e => setNewHack({...newHack, title: e.target.value })}
                value={newHack.title}
                />
                <br />
                <label>Description</label>
                <br />
                <input 
                type="text"
                name="description"
                placeholder="description"
                onChange={e => setNewHack({...newHack, description: e.target.value })}
                value={newHack.description}
                />
                <br />
                <label>Materials</label>
                <br />
                <input 
                type="text"
                name="materials"
                placeholder="materials"
                onChange={e => setNewHack({...newHack, materials: e.target.value })}
                value={newHack.materials}
                />
                <br />
                <label>Instructions</label>
                <br />
                <input 
                type="text"
                name="instructions"
                placeholder="instructions"
                onChange={e => setNewHack({...newHack, instructions: e.target.value })}
                value={newHack.instructions}
                />
                <br />
                <label>Video</label>
                <br />
                <input 
                type="text"
                name="video"
                placeholder="Got a URL?"
                onChange={e => setNewHack({...newHack, video: e.target.value })}
                value={newHack.video}
                />
                <br />
                <button onClick={refresh}>Submit Your Hack</button>
            </form>
            
        </div>
    )
}
export default AddHackForm;