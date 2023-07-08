import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux";
import {
    follow,
    InitialStateType,
    setCurrentPage,
    setIsFetching,
    setUsers,
    setTotalUsersCount,
    unFollow,
    UserType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import axios from "axios";
import Preloader from "../../common/preloader/Preloader";

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
    setIsFetching: (fetching: boolean) => void
}

export type usersPropsType = mapStatePropsType & mapDispatchPropsType;


export class UsersContainer extends React.Component<usersPropsType> {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.usersPage.users}
                        unFollow={this.props.unfollow}
                        follow={this.props.follow}/>
        </>
    }
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
export default connect(mapStateToProps, {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching})(UsersContainer);

