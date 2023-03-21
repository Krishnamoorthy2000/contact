import React from "react";
import { useHistory } from "react-router-dom";

export default function BaseApp({title ,children}){
    const history = useHistory();
    return (
        <div>
            <div>
            <div className="nav-styles">
                <span>
                    <button 
                    className="nav-buttons"
                    onClick={()=>history.push("/add/user")}
                    >Add User</button>
                </span>
                <span>
                    <button 
                    className="nav-buttons"
                    onClick={()=>history.push("/dashboard")}
                    >Dashboard</button>
                </span>
            </div>
            <div className="title">{title}</div>
            </div>

             <div className="children">
                {children}
        <footer>
            contact us
             <div>email : react@email.com</div>
             <div>phone : 76****143</div>
         </footer>
             
             </div>

        </div>
    )
}