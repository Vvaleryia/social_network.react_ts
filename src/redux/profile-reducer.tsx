export type PostType = {
    id: number
    message: string
    likesCount: number
}
const initialState: initialProfileState = {
    posts: [
        {id: 1, message: 'Hello, how are you ?', likesCount: 12},
        {id: 2, message: 'Hey, I/m all right, thanks', likesCount: 8},
        {id: 3, message: 'you will go with me to gym?', likesCount: 20}
    ],
    newValuePost: ''
}
export type initialProfileState = {
    posts: Array<PostType>
    newValuePost: string
}
type ActionsType = addPostAT | updateNewPostTextAT;
export const profileReducer = (state: initialProfileState = initialState, action: ActionsType): initialProfileState => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 4,
                message: state.newValuePost,
                likesCount: 0
            }
            return {
                ...state,
                newValuePost: '',
                posts: [...state.posts, newPost]
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newValuePost: action.newText
            }
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