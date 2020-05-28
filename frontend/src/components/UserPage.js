import React from "react";
import AddHackForm from "./AddHackForm";

const UserPage = (props) => {
    return (
        <div>
            <div className="welcome"><p>Welcome to your Life-Hack Profile.</p></div>
            <div className="flexThisProfile">
            <div className="aboutUs"><h2>About Us</h2>
            <p>Here at Life-Hacks, we build Apps and Sites that can be used to make your life easier. Why not add to the infinite Life-Hack Database!</p>
            </div>
            <div>
            <AddHackForm posts={props.posts} setPosts={props.setPosts} />
            </div>
            <div className="whatYouCanDo"><h2>What You Can Do</h2>
            <p>This is your Profile. You can come up with ideas and share them with the world. Share your life hacks, ideas and anything to make life easier! dont forget to include a link!</p>
            </div>
            </div>
        </div>
    );
};
export default UserPage;
