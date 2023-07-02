import React from 'react';
import {rootStoreType} from "../../../redux/state";
import MyPosts from "./MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (<StoreContext.Consumer>
            {(store: rootStoreType) => {
                const addPost = () => {
                   store.dispatch(addPostAC())
                }
                const onChangeValuePost = (text: string) => {
                   store.dispatch(updateNewPostTextAC(text))
                }
                const posts = store.getState().profilePage.posts;
                const newValuePost = store.getState().profilePage.newValuePost;

                return (<MyPosts
                    updateNewPostText={onChangeValuePost}
                         addPost={addPost}
                         posts={posts}
                         newValuePost={newValuePost}
                />)
            }
        }
        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;