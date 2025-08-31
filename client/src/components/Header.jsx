import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function Header(){

    const navigate = useNavigate()
    const { userData } = useContext(AppContext)

    const onClickHandler = () => {
        userData ? navigate('/') : navigate('/login')
    }

    return(
        <div className="flex flex-col items-center mt-20 px-4 text-center text-gray-300">
            <img src={assets.header_img} alt="" className="w-36 h-36 rounded-full"/>
            
            <h1 className="flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2">Hey {userData ? userData.name : 'Fellow Developer'}!
                <img className="w-8 aspect-square" src={assets.hand_wave} alt="" />
            </h1>
            
            <h2 className="text-3xl sm:text-5xl font-semibold mb-4">Welcome to my Port Folio Website!</h2>

            <p className="mb-8 max-w-md">This website is a complete MERN stack based authentication project.<br></br> Let me give you a quick tour.</p>
            
            <button onClick={() => onClickHandler()} className="border border-gray-500 rounded-full px-8 py-2.5 hover:bg-gray-700 transition-all cursor-pointer">Get Started</button>
        </div>
    )
}

export default Header