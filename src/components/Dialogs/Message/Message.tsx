import React from 'react';
import style from "../Message.module.css";

export type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {
    return <div className={style.message}>
        {props.message}
    </div>
};

export default Message;