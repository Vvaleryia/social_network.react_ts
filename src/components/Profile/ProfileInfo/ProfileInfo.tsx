import React from 'react';
import style from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="#" alt="background-color"/>
            </div>
            <div className={style.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
};

export default ProfileInfo;