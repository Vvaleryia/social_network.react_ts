type LocationType = {
    city: string
    country: string
}
export type UserType = {
    id:  number
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

const initialState:InitialStateType = {
    users: []
}
export type InitialStateType ={
    users: Array<UserType>
}

type ActionsTypes = followAT | unfollowAT | setUsersAT;
export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW' :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case 'UNFOLLOW' :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}
type followAT = {
    type: 'FOLLOW'
    userId: number
}
export const followAC = (userId: number): followAT => {
    return {
        type: 'FOLLOW',
        userId
    }
}

type unfollowAT = {
    type: 'UNFOLLOW'
    userId: number
}
export const unfollowAC = (userId: number): unfollowAT => {
    return {
        type: 'UNFOLLOW',
        userId
    }
}
type setUsersAT = {
    type: 'SET-USERS'
    users: any
}
export const setUsersAC = (users: Array<UserType>): setUsersAT => {
    return {
        type: 'SET-USERS' as const,
        users
    }
}


