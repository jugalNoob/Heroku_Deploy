import React,{useState,useContext} from 'react'
import { useEffect } from 'react';
import { NavLink,useHistory} from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { LoginContext } from "./ContextProvider/Context";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Nav() {
    const { logindata, setLoginData } = useContext(LoginContext);
    const history=useHistory();
  ////////////////////user  function button////
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
  /////////////////////// logout user////////////////////
  const loginout=async()=>{
  let token=localStorage.getItem("usersdatatoken")
  console.log(token)
  const res = await fetch("/logout", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": token,
        Accept:"application/json",
    },
    Credentials:"include"
  });
  // console.log(res)
  const data=await res.json();
  if(data.status !== 201){
  console.log("error")
  history.push("/error")
    console.log("error page rediirect")
    alert("out if kyou have")
  }else{
    // setLoginData(data)
    console.log("user logout")
    localStorage.removeItem("usersdatatoken")
    setLoginData(false)
    history.push("/")
    alert("else out") 
  }
  }
  ////////////////////////////logout /////////////////////////////
  const goDash=()=>{
  
    history.push("/dapp")
  
  }
  
  const goError=()=>{
  history.push("/error")
  }
  
  const logindatas=()=>{
  
    history.push("/login")
  }
  
  const formdata=()=>{
  
    history.push("/form")
  }
  
  
  const homedata=()=>{
  
    history.push("/")
  }


  const dashbords=()=>{
  
    history.push("/dash")
  }
  

    ////////////////API//////////////
    

  return (
    <div>
{/* first row  class line */}


<div className="avatar">
{
logindata.ValidUserOne ? <Avatar style={{background:"blue"}}  onClick={handleClick}>{logindata.ValidUserOne.name[0].toUpperCase()}</Avatar>:
<Avatar style={{ background: "blue" }} onClick={handleClick} />
} 
</div>
{/* end row class line start */}


{/* ////////////menu start row class function */}
<Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>

        {

          logindata.ValidUserOne ? (
            <div>

<MenuItem onClick={() => {
        homedata()
        handleClose()
}}>Home</MenuItem>

             <MenuItem onClick={() => {
              goDash()
               handleClose()
              }}>Dapp</MenuItem>
  {/* ////////main logout line start///////////// */}
        <MenuItem onClick={()=>{
          loginout()
          handleClose()
        }}>Logout</MenuItem> 


<MenuItem onClick={()=>{
          dashbords()
          handleClose()
        }}>dash</MenuItem> 

            </div>
          ):(
<div>
  {/* /////////////////use allNav Bar star//////////// */}
{/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}

<MenuItem onClick={() => {                                        // goError()
      homedata()
        handleClose()
}}>home</MenuItem>

<MenuItem onClick={() => {                                        // goError()
       goError()
        handleClose()
}}>dapp</MenuItem>



<MenuItem onClick={() => {                                        // goError()
        formdata()
        handleClose()
}}>Form</MenuItem>

<MenuItem onClick={() => {                                        // goError()
        logindatas()
        handleClose()
}}>Login</MenuItem>

<MenuItem onClick={()=>{
          dashbords()
          handleClose()
        }}>dash</MenuItem> 

</div>

          )
        }
     
      </Menu>


      {/* ///////////////////second row class media */}

<div className='start'>

<div className="logo">

    
<i class="fab fa-ethereum"></i>
</div>

<div className="head-one">



    </div>

    <div className="nav">

<ul>
{/* 
<NavLink to="/">Home</NavLink>
<NavLink to="/dapp">Dapp</NavLink>
<NavLink to="/form">Form</NavLink>
<NavLink to="/login">Login</NavLink> */}

</ul>

    </div>

</div>

{/* second row class line start */}




{/* last row class line */}

    </div>
  )
}

export default Nav



