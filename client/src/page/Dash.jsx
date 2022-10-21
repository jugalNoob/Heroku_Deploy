import React,{useState ,useContext, useEffect} from 'react'


// import { loadContract } from "./utils/load-contract.js"
import { LoginContext } from './ContextProvider/Context';
import {NavLink ,useHistory} from "react-router-dom"
// import "./style/dapp.css"


function Dash() {
  const { logindata, setLoginData } = useContext(LoginContext);
  const history=useHistory();

  const dashborad=async()=>{
    let token=localStorage.getItem("usersdatatoken")
    // console.log(token)
    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          "Authorization": token
      }
    });
    // console.log(res)
    const data=await res.json();
    if(data.status === 401 || !data){
    history.push("/error")
      console.log("error page rediirect")
    }else{
      // setLoginData(data)
      console.log("user verifying")
      setLoginData(data)
      history.push("/dapp")     
    }
  }
  useEffect(()=>{
    dashborad();
  },[])
  /////////////////////web3API//////////

  return (
    <div>


<h1>User Email:{logindata ? logindata.ValidUserOne.email : ""}</h1>

    </div>
  )
}

export default Dash