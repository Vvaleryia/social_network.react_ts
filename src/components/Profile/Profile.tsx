import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../state/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
}
const Profile = (props: ProfilePropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts profilePage={props.profilePage}/>
    </div>
};

export default Profile;