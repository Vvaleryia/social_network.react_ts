import {DialogsPageType} from "./state";

type ActionsType = updateNewMessageBodyAT | sendMessageAT;
const initialState =  {
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
export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.newMessage;
            return state
        case 'SEND-MESSAGE':
            let message = state.newMessageBody;
            state.newMessageBody = '';
            let newMessage = {
                id: 4, message: message
            }
            state.message.push(newMessage)
            return state
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