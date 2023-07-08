import React from 'react';
import loading from "../../assect/loading.svg";
const Preloader = () => {
    return (
        <div>
            <img src={loading} alt={'loading'}/>
        </div>
    );
};

export default Preloader;