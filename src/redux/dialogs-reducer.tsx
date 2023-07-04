import {DialogsType, MessageType} from "./state";

type ActionsType = updateNewMessageBodyAT | sendMessageAT;

const initialState : initialStateDialogsType = {
    dialogs: [
        {id: 1, name: 'Valeryia'},
        {id: 2, name: 'Valery'},
        {id: 3, name: 'Make'},
        {id: 4, name: 'Polina'},
        {id: 5, name: 'Natallia'}
    ],
    message: [
        {id: 1, message: 'Hello, how are you?'},
        {id: 2, message: 'Hope, you are all right!'},
        {id: 3, message: 'Is it ok for you to meet tomorrow at 12.00?u?'}
    ],
    newMessageBody: ''
}
export type initialStateDialogsType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
    newMessageBody: string
}
export const dialogsReducer = (state: initialStateDialogsType = initialState, action: ActionsType): initialStateDialogsType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            return {
                ...state,
                newMessageBody: action.newMessage
            }
        case 'SEND-MESSAGE':
            let message = state.newMessageBody;
            let newMessage = {
                id: 4, message: message
            }
            return {
                ...state,
                message: [...state.message, newMessage],
                newMessageBody: ''
            }
        default:
            return state
    }
}

type updateNewMessageBodyAT = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    newMessage: string
}
type sendMessageAT = {
    type: 'SEND-MESSAGE'
}

export const updateNewMessageBodyAC = (newMessage: string): updateNewMessageBodyAT => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY' as const,
        newMessage
    }
}
export const sendMessageAC = (): sendMessageAT => {
    return {
        type: 'SEND-MESSAGE' as const
    }
}