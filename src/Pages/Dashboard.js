import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";

function Dashboard(){
    const navigate = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    },[])
    

    return <div>This is the login directed
        <button className="btn btn-danger"  onClick={() => {
                localStorage.removeItem('token')
                navigate('/Login')
            }}>Logout</button> 

    </div>;
}

export default Dashboard;