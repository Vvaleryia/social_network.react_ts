import React from 'react';
import styles from './Users.module.css';
import userPhoto from './../../assect/userPhoto.png'
import {UserType} from "../../redux/users-reducer";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    unFollow: (userId: number) => void
    follow: (userId: number) => void
}
export const Users = (props: PropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const curP = props.currentPage;
    const curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
    const curPL = curP + 5;
    const slicedPages = pages.slice( curPF, curPL);
    return (
        <div>
            <div>
                {
                    slicedPages.map(p => {
                        return <span
                            className={props.currentPage === p ? styles.selectedPage : ''}
                            onClick={() => {props.onPageChanged(p)} }>{p}</span>
                    })}
            </div>
            {
                props.users.map(u => {
                    const onCLickHandlerFollowHandler = () => {
                        props.unFollow(u.id)
                    }
                    const onCLickFollowHandler = () => {
                        props.follow(u.id)
                    }
                    return (
                        <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={onCLickHandlerFollowHandler}>Unfollow</button>
                                : <button onClick={onCLickFollowHandler}>Follow</button>
                            }
                        </div>
                    </span>
                            <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                        </div>
                    )
                })}
        </div>
    )
}