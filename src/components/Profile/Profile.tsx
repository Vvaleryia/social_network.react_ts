import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, updateNewPostText} from "../../state/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    newValuePost: string
    updateNewPostText: (newText: string) => void
}
const Profile = (props: ProfilePropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts
            profilePage={props.profilePage}
            addPost={props.addPost}
            newValuePost={props.newValuePost}
            updateNewPostText={props.updateNewPostText}
        />
    </div>
};

export default Profile;