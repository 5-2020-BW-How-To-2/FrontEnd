import React from 'react'
import AddHackForm from './AddHackForm'

const UserPage = props => {
    return (
        <div>
            <h1>Profile</h1>
            <AddHackForm posts={props.posts} setPosts={props.setPosts} />
        </div>
    )
}
export default UserPage;