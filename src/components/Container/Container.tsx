import React,{ ReactNode } from "react";
import { IChildren } from "../../model/model";
import "./Container.style.scss";


const Container = ({children}:IChildren)=>{
    return (
        <div className="container">
            {children}
        </div>
    )
};

export default Container;