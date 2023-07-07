import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, PostType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux";
import {Dispatch} from "redux";


type MapStatePropsType = {
    posts: Array<PostType>
    newValuePost: string
}
type MapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}
export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType;
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newValuePost: state.profilePage.newValuePost
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;