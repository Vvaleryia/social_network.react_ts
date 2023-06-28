import React from 'react';
import style from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
        <div>
            <div className={style.info}>
                <img src="https://images.wallpaperscraft.com/image/single/trees_forest_house_968877_3840x2160.jpg" alt="background-photo"/>
            </div>
            <div className={style.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
};

export default ProfileInfo;