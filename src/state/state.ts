export type MessageType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newValuePost: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
}
export type rootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

}

export type rootStoreType = {
    _state: rootStateType
    getState: () => rootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
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
                {id: 1, message: 'Hope, you are all right!'},
                {id: 1, message: 'Is it ok for you to meet tomorrow at 12.00?u?'}
            ]
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
    dispatch(action: ActionsTypes) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newValuePost,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newValuePost = action.newText;
            this._callSubscriber()
        }
    }
}
export type ActionsTypes = addPostAT | updateNewPostTextAT;

type addPostAT = {
    type: 'ADD-POST'
}
type updateNewPostTextAT = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export const addPostAC = (): addPostAT => {
    return {
        type: 'ADD-POST' as const
    }
}
export const updateNewPostTextAC = (newText: string): updateNewPostTextAT => {
    return {
        type: 'UPDATE-NEW-POST-TEXT' as const,
        newText: newText
    }
}
export default store;