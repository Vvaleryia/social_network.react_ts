import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {rootStoreType} from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
   store: rootStoreType
}
const Profile = (props: ProfilePropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer store={props.store}/>
    </div>
};

export default Profile;