const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN-FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

export type LocationType = {
    city: string
    country: string
}
type PhotosType = {
    small: string
    large: string
}
export type UserType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: LocationType
    pageSize: number
    totalUsersCount: number
}
export type InitialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true
};

const usersReducer = (state: InitialStateType = initialState, action: UsersAction): InitialStateType => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: true
                        }
                    }
                    return u
                })
            }
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: false
                        }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        case SET_CURRENT_PAGE :
            return {
                ...state, currentPage: action.pageNumber
            }
        case SET_TOTAL_USERS_COUNT :
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING :
            return {
                ...state, isFetching: action.fetching
            }
        default:
            return state
    }
}

export type UsersAction =
    ReturnType<typeof followAC> |
    ReturnType<typeof unFollowAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setUsersTotalCountAC> |
    ReturnType<typeof setIsFetchingAC>

export const setIsFetchingAC = (fetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        fetching: fetching
    } as const
}
export const setUsersTotalCountAC = (totalCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount
    } as const
}
export const setCurrentPageAC = (pageNumber: number) => {
    return {type: SET_CURRENT_PAGE, pageNumber} as const
}
export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId: userId
    } as const
}
export const unFollowAC = (userId: number) => {
    return {
        type: UN_FOLLOW,
        userId: userId
    } as const
}
export const setUsersAC = (users: UserType[]) => {
    return {
        type: SET_USERS,
        users: users
    } as const
}


export default usersReducer;
