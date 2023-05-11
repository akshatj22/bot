import React from "react";
import style from './container.module.css'
import ChatHeader from "../../chatUI/header/header";
import InputBox from "../../chatUI/inputBox/input";
function Container(){
    return(
        <div className={style.container}>
        <div className={style.box}>
           <ChatHeader contactName="UsBot" />
           <InputBox sendMessage="Hiiii" />
          
        </div>
    </div>
    )
}

export default Container;