import React from "react";
import { InputContext } from './inputContext'
import './App.css';

const UserName = (props) => {
    return <div className="user">
        <div className="avatar">{props.avatar ? <img src={props.avatar}></img> : ''}</div>
        <div className="userName">{props.username}</div>
    </div>
}

const UserNames = () => {
    const gitUserNames = React.useContext(InputContext)

    return <>
        <div className="userNames">
            {gitUserNames.userDatas.map(data => <UserName username={data.login ? data.login : data} key={data.id ? data.id : 1} avatar={data.avatar_url} />)}
        </div>
    </>
}



export default UserNames