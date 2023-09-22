import React from "react";

export default function Input(props){
    return (
        <input type={props.type} className={props.className} value={props.value}/>
    )
}