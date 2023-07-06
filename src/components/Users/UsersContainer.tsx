import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux";
import {Dispatch} from "redux";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {Users} from "./Users";

type mapStatePropsType = {
    usersPage: InitialStateType
}
type mapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type usersPropsType = mapStatePropsType & mapDispatchPropsType;
const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        usersPage: state.usersReducer
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
return {
    follow: (userId: number) => {
        dispatch(followAC(userId))
    },
    unfollow: (userId: number) => {
        dispatch(unfollowAC(userId))
    },
    setUsers: (users: Array<UserType>) => {
        dispatch(setUsersAC(users))
    }
}
}
export default connect(mapStateToProps, mapDispatchToProps) (Users);

