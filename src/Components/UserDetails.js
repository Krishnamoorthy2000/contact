import React from "react";
import { useParams } from "react-router-dom";
import BaseApp from "../Core/Base";
import { useHistory } from "react-router-dom";


export function UserDetails({user}){
    const history = useHistory();
    const {id} = useParams();
    const person = user[id];
    return (
        <BaseApp
        title ={person.name}
        >
           <div className="user-content">
                <div  className="user-card">
                    <h1>{person.name}</h1>
                    <hr />
                    <p>Batch : {person.batch}</p>
                    <p>Email : {person.email}</p>
                    <p>Exp : {person.experience}</p>
                    <button 
                        onClick={()=>history.push(`/edit/${person.id}`)}
                        className="btn edit-btn">
                          Edit</button>
                    <button
                    className="btn back"
                onClick={()=>history.push("/")}>Back</button>
                </div>
                
            </div>
        </BaseApp>
    )
}