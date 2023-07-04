import React from 'react';
import {usersPropsType} from "./UsersContainer";

const Users = (props: usersPropsType) => {
    if(props.usersPage.users.length === 0)
    {
        props.setUsers(
            [
                {
                    id: 1,
                    followed: true,
                    fullName: 'Valeryia',
                    status: 'I am a here',
                    location: {city: 'Wroclaw', country: 'Poland'}
                },
                {
                    id: 2,
                    followed: false,
                    fullName: 'Valery',
                    status: 'I am a here',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 3,
                    followed: true,
                    fullName: 'Natallia',
                    status: 'I am a here',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
                {id: 4,
                    followed: false,
                    fullName: 'Varvara',
                    status: 'I am a here',
                    location: {city: 'LA', country: 'USA'}}
            ]
        )
    }
    return (
        <div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img />
                        </div>
                        <div>
                            { u.followed
                                ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>
                                : <button onClick={ () => {props.follow(u.id)} }>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>
                                {u.location.country}
                            </div>
                            <div>
                                {u.location.city}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;