import React from 'react';
import {rootStoreType} from "../../../redux/state";
import MyPosts from "./MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";

export type PostDataPropsType = {
    store: rootStoreType
}
const MyPostsContainer = (props: PostDataPropsType) => {
    const addPost = () => {
        props.store.dispatch(addPostAC())
    }
    const onChangeValuePost = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }
    const posts = props.store.getState().profilePage.posts;
    const newValuePost = props.store.getState().profilePage.newValuePost;
    return (
        <MyPosts updateNewPostText={onChangeValuePost}
                 addPost={addPost}
                 posts={posts}
                 newValuePost={newValuePost}
        />
    )
};

export default MyPostsContainer;