import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    newMessageBody: string
    onSendMessageHandler: () => void
    onNewMessageChange: (body: string) => void
}
const Dialogs = (props: DialogsPropsType) => {

    const dialogsElement = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    const messagesElement = props.dialogsPage.message.map(message => <Message id={message.id} message={message.message}/>)
    const newMessageBody =props.newMessageBody;
    const onSendMessageHandler = () => {
        props.onSendMessageHandler()
    }
    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const body = event.currentTarget.value
        props.onNewMessageChange(body)
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            placeholder={'Enter your message'}
                            onChange={onNewMessageChange}>
                         </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageHandler}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;