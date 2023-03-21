import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/Base";

export function AddUser({user, setUser}){
    const history = useHistory()
    //defining states
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState();
    const [batch, setBatch]= useState("");

    const addNewUser = ()=>{
        const newUser = {
            id,
            name,
            email,
            batch,
            experience
        }
        // console.log(newUser)
        setUser([...user, newUser])
        history.push("/")
    } 
    
    return (
        <BaseApp
        title={"Add A New User"}
        >
             <div>
                <input 
                placeholder="ID"
                value ={id}
                onChange={(event)=>setId(event.target.value)}
                />

                <input 
                placeholder="Name"
                value= {name}
                onChange={(event)=>setName(event.target.value)}
                />

                <input 
                placeholder="E-mail"
                value= {email}
                onChange={(event)=>setEmail(event.target.value)}
                />

                <input 
                placeholder="Experience"
                value = {experience}
                onChange={(event)=>setExperience(event.target.value)}
                />

                <input 
                placeholder="Batch"
                value = {batch}
                onChange={(event)=>setBatch(event.target.value)}
                />

                <button
                className="btn add-btn"
                onClick={addNewUser}
                >Add</button>
        </div>
        </BaseApp>
    )
}