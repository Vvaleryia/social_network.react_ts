import React from 'react';
import style from './Post.module.css';
type PostPropsType = {
    id: number
    message: string
    likesCount: number
}
const Post = (props: PostPropsType) => {
    return <div className={style.item}>
        <img src="https://cdn4.iconfinder.com/data/icons/people-of-medical-education-and-science/512/People_Medical_Education_Science_lab_scientist_woman-1024.png" alt="avatar"/>
        {props.message}
        <span>like</span>
    </div>
};

export default Post;