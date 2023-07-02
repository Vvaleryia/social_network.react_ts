import React from 'react';
import {rootStoreType} from "../../redux/state";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store: rootStoreType) => {
                const dialogsPage = store.getState().dialogsPage;
                const newMessageBody = dialogsPage.newMessageBody;
                const onSendMessageHandler = () => {
                    store.dispatch(sendMessageAC())
                }
                const onNewMessageChange = (body: string) => {
                    store.dispatch(updateNewMessageBodyAC(body))
                }
               return  <Dialogs dialogsPage={dialogsPage}
                         newMessageBody={newMessageBody}
                         onSendMessageHandler={onSendMessageHandler}
                         onNewMessageChange={onNewMessageChange}
                />
            }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;