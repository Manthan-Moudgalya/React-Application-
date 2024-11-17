import React, {useContext} from "react";
import { UserName } from './App.jsx';

export default function Properties() {
    const username = useContext(UserName);
    return(
        <>
        <p>Hello {username} to the world of React JS</p>
        </>
    );
}

