import React from "react";
import { useHistory } from "react-router-dom";

export function Nopage(){
    const history = useHistory()
    return (
        <div >
           <h1>404 Not Found</h1>
           <p>Sorry, we couldn't find the page you're looking for.</p>

           <button
             className="btn back"
                onClick={()=>history.push("/")}>Back</button>
            
        </div>
    )
}