import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux";
import {Dispatch} from "redux";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC, setIsFetchingAC,
    setUsersAC, setUsersTotalCountAC,
    unFollowAC,
    UserType
} from "../../redux/users-reducer";
import {Users} from "./Users";

type mapStatePropsType = {
    usersPage: InitialStateType
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type mapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetchingAC: (fetching: boolean) => void
}

export type usersPropsType = mapStatePropsType & mapDispatchPropsType;
const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
return {
    follow: (userId: number) => {
        dispatch(followAC(userId))
    },
    unfollow: (userId: number) => {
        dispatch(unFollowAC(userId))
    },
    setUsers: (users: Array<UserType>) => {
        dispatch(setUsersAC(users))
    },
    setCurrentPage : (pageNumber: number) => {
        dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount: number) => {
        dispatch(setUsersTotalCountAC(totalCount))
    },
    setIsFetchingAC: (fetching: boolean) => {
        dispatch(setIsFetchingAC(fetching))
    }
}
}
export default connect(mapStateToProps, mapDispatchToProps) (Users);

