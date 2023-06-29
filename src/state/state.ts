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
let rerenderEntireTree = () => {
    console.log('Hello')
}

let state: rootStateType = {
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
}
export const addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newValuePost,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree()
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newValuePost = newText;
    rerenderEntireTree()
}
export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer;
}
export default state;