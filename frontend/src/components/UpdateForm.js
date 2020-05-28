import React, { useState } from 'react';
import axiosWithAuth from '../utils/AxiosWithAuth';
import { useHistory } from 'react-router-dom';

    const UpdateForm = props => {
    const { push } = useHistory();

    const [newData, setNewData] = useState({
        id: 0,
        title: "",
        description: "",
        materials: "",
        instructions: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .put(`https://clhowto.herokuapp.com/api/posts/${newData.id}`, newData)
            .then((res) => {
                setNewData(res.data);
                // window.location.reload()
                push('/dashboard')
                console.log("this is the updated data", res.data);
            });
    };
    const refresh = () => {
        window.location.reload(false);
    };

    return (
        <div>
            <h1>Have a better idea?</h1>
            <form onSubmit={handleSubmit}>
                <h3>Whats your big idea!</h3>
                <label>Life-Hack</label>
                <br />
                <label>ID</label>
                <br />
                <input 
                type="number"
                name="id"
                placeholder="id"
                onChange={(e) =>
                    setNewData({ ...newData, title: e.target.value })
                }
                value={newData.id}
                />
                <br />
                <input
                    type='text'
                    name='title'
                    placeholder='hack'
                    onChange={(e) =>
                        setNewData({ ...newData, title: e.target.value })
                    }
                    value={newData.title}
                />
                <br />
                <label>Description</label>
                <br />
                <input
                    type='text'
                    name='description'
                    placeholder='description'
                    onChange={(e) =>
                        setNewData({ ...newData, description: e.target.value })
                    }
                    value={newData.description}
                />
                <br />
                <label>Materials</label>
                <br />
                <input
                    type='text'
                    name='materials'
                    placeholder='materials'
                    onChange={(e) =>
                        setNewData({ ...newData, materials: e.target.value })
                    }
                    value={newData.materials}
                />
                <br />
                <label>Instructions</label>
                <br />
                <input
                    type='text'
                    name='instructions'
                    placeholder='instructions'
                    onChange={(e) =>
                        setNewData({ ...newData, instructions: e.target.value })
                    }
                    value={newData.instructions}
                />
                <br />
                <button >Submit Your Edit</button>
            </form>
            
        </div>
    )
}
export default UpdateForm

