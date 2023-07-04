import React from 'react';
import {initialStateDialogsType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux";


type mapStatePropsType = {
    state: initialStateDialogsType
    newMessageBody: string
}
type mapDispatchPropsType = {
    onSendMessageHandler: () => void
    onNewMessageChange: (body: string) => void
}
export type DialogsPropsType  = mapDispatchPropsType & mapStatePropsType;
const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        state: state.dialogsReducer,
        newMessageBody: state.dialogsReducer.newMessageBody
    }
}
//in the first object will be data from the state
const mapDispatchToProps = (dispatch: any) => {
    return {
        onSendMessageHandler: () => {
            dispatch(sendMessageAC())
        },
        onNewMessageChange: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;