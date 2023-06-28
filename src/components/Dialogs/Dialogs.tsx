import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <DialogItem name={'Valeryia'} id={'1'}/>
                <DialogItem name={'Valery'} id={'2'}/>
                <DialogItem name={'Make'} id={'3'}/>
                <DialogItem name={'Polina'} id={'4'}/>
                <DialogItem name={'Natallia'} id={'5'}/>
            </div>
            <div className={style.messages}>
                <Message message={' Hello, how are you?'}/>
                <Message message={' Hope, you are all right!'}/>
                <Message message={'  Is it ok for you to meet tomorrow at 12.00?'}/>
            </div>
        </div>
    );
};

export default Dialogs;