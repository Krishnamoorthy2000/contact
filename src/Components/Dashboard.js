import React from 'react'
import { useHistory } from 'react-router-dom'

const Dashboard = ({childred}) => {
  const history=useHistory();
  return (
    <div className='dashboard'>
        

        <div className='main-content'>
            
            <h1>welcome to the user contact</h1>
                <button
                    className="btn back"
                  onClick={()=>history.push("/")}>Back</button>
                </div>
        </div>
   
  )
}

export default Dashboard