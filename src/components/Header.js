import { useState } from "react";
import { logoImg } from "../utils/constant";
const Header=()=>{
    const [loginbtn,setloginbtn]=useState("Login");
    return(
        <div className="flex justify-between items-center px-10 mx-2 border-2 border-black rounded-xl py-2">
           <div>
                <img className="w-40" src={logoImg} />
           </div>
           <div className="flex gap-10 text-2xl">
                <p className="cursor-pointer">Home</p>
                <p className="cursor-pointer">About</p>
                <p className="cursor-pointer">Cart</p>
                <p className="cursor-pointer p-2 bg-[#f0f0f0]" 
                onClick={()=>{
                   (loginbtn==="Login")?setloginbtn("Logout"):setloginbtn("Login");
                }}
                >{loginbtn}</p>
           </div>
        </div>
    )
}
export default Header;