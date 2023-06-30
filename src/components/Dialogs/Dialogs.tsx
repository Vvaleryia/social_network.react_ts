import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {rootStoreType, sendMessageAC, updateNewMessageBodyAC} from "../../state/state";

type DialogsPropsType = {
    store: rootStoreType
}
const Dialogs = (props: DialogsPropsType) => {

    const state = props.store.getState().dialogsPage;

    const dialogsElement = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    const messagesElement = state.message.map(message => <Message id={message.id} message={message.message}/>)
    const newMessageBody =state.newMessageBody;
    const onSendMessageHandler = () => {
        props.store.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const body = event.currentTarget.value
        props.store.dispatch(updateNewMessageBodyAC(body))
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