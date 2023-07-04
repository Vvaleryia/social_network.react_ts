import {initialProfileState, profileReducer} from "./profile-reducer";
import {dialogsReducer, initialStateDialogsType} from "./dialogs-reducer";

export type MessageType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}


export type rootStateType = {
    profilePage: initialProfileState
    dialogsPage: initialStateDialogsType

}

export type rootStoreType = {
    _state: rootStateType
    getState: () => rootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: any) => void
}

let store: rootStoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello, how are you ?', likesCount: 12},
                {id: 2, message: 'Hey, I/m all right, thanks', likesCount: 8},
                {id: 3, message: 'you will go with me to gym?', likesCount: 20}
            ],
            newValuePost: ''
        },
        dialogsPage: {
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
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },
    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action )
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action )
        this._callSubscriber()
    }
}
export default store;