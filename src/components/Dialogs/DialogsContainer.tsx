import React from 'react';
import {rootStoreType} from "../../redux/state";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type DialogsPropsType = {
    store: rootStoreType
}
const DialogsContainer = (props: DialogsPropsType) => {

    const dialogsPage = props.store.getState().dialogsPage;
    const newMessageBody =dialogsPage.newMessageBody;
    const onSendMessageHandler = () => {
        props.store.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }
    return (
       <Dialogs dialogsPage={dialogsPage}
                newMessageBody={newMessageBody}
                onSendMessageHandler={onSendMessageHandler}
                onNewMessageChange={onNewMessageChange}
       />
    );
}

export default DialogsContainer;