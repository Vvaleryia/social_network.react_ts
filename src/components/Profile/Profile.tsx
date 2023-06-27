import React from 'react';
import style from './Prodile.module.css';
const Profile = () => {
    return <div className={style.content}>
        <div>
            <img src="#" alt="background-color"/>
        </div>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                new post
            </div>
            <div className={style.posts}>
                <div className={style.item}>
                    post 1
                </div>
                <div className={style.item}>
                    post 2
                </div>
                <div className={style.item}>
                    post 3
                </div>
            </div>
        </div>
    </div>
};

export default Profile;