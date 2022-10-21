import React,{useState ,useContext, useEffect} from 'react'
import Web3 from 'web3'
import detectEthereumProvider from '@metamask/detect-provider'
// import { loadContract } from "./utils/load-contract.js"
import { LoginContext } from './ContextProvider/Context';
import {NavLink ,useHistory} from "react-router-dom"
// import "./style/dapp.css"


function Dapp() {
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

  const [webApi , setWebapi]=useState({

    provider: null,

        web3: null,
        // Contract:null,

  })

  //metamask conncat blockchain

  
  useEffect(() => {


    const loadProvider = async() => {


        const provider = await detectEthereumProvider();

        // const contract = await loadContract("Funder", provider)



        if (provider) {

            provider.request({ method: "eth_requestAccounts" })

            setWebapi({
                web3: new Web3(provider),

                provider,
                // contract

            });
        } else {

            console.error("please install MetaMask")
        }


    }

    loadProvider()

}, [])

console.log(webApi.web3)

//ACCOUNT NUMBER 
const [account, setAccount] = useState(null);



useEffect(() => {


    const getAccount = async() => {


        const accounts = await webApi.web3.eth.getAccounts()

        setAccount(accounts[0])

    }

    webApi.web3 && getAccount()

}, [webApi.web3])

  return (
    <div>


<h1>User Email:{logindata ? logindata.ValidUserOne.email : ""}</h1>

    </div>
  )
}

export default Dapp