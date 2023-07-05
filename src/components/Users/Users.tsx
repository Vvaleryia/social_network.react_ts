import React from 'react';
import {usersPropsType} from "./UsersContainer";
import axios from 'axios'
const Users = (props: usersPropsType) => {
    if(props.usersPage.users.length === 0)
    {
        axios.get('https://social-network.samurajjs.com/api/1.0')
            .then(response => {props.setUsers(response.data)})
    }
    return (
        <div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small}/>
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
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>
                                {"u.location.country"}
                            </div>
                            <div>
                                {"u.location.city"}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;