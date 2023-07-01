import {ProfilePageType} from "./state";

type ActionsType = addPostAT | updateNewPostTextAT;
const initialState =  {
    posts: [
        {id: 1, message: 'Hello, how are you ?', likesCount: 12},
        {id: 2, message: 'Hey, I/m all right, thanks', likesCount: 8},
        {id: 3, message: 'you will go with me to gym?', likesCount: 20}
    ],
    newValuePost: ''
}
export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 4,
                message: state.newValuePost,
                likesCount: 0
            }
            state.posts.push(newPost);
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newValuePost = action.newText;
            return state
        default:
            return state
    }
}

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