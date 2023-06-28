import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
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
            <Post title={'Hello, how are you ? '}/>
            <Post title={'Hey, I/m all right, thanks'}/>
            <Post title={'you will go with me to gym?'}/>
        </div>
    </div>
};

export default MyPosts;