import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType, MessageType} from "../../state/state";

type DialogsPropsType = {
    dialogsPage: DialogsType[]
    messagePage: MessageType[]
}
const Dialogs = (props: DialogsPropsType) => {
    let dialogsElement = props.dialogsPage.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElement = props.messagePage.map(message => <Message id={message.id} message={message.message}/>)
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                {messagesElement}
            </div>
        </div>
    );
}

export default Dialogs;