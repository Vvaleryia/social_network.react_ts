import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {ProfilePageType} from "../../../state/state";
export type PostDataPropsType = {
    profilePage: ProfilePageType
}
const MyPosts = (props: PostDataPropsType) => {
    let postDataElement = props.profilePage.posts.map(post => <Post id={post.id} message={post.message} likesCount={post.likesCount}/>)
    return <div className={style.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div className={style.posts}>
            {postDataElement}
        </div>
    </div>
};

export default MyPosts;