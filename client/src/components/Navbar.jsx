import React, { useContext } from "react";
import { assets } from "../assets/assets.js";
import { useNavigate } from 'react-router-dom'
import { AppContext } from "../context/AppContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";

function Navbar() {

    const navigate = useNavigate()
    const { userData, backendURL, setUserData, setIsLoggedIn } = useContext(AppContext)

    const sendVerificationOTP = async () => {
        try {
            axios.defaults.withCredentials = true

            const { data } = await axios.post(backendURL + '/api/auth/send-verify-otp')

            if(data.success){
                navigate('/email-verify')
                toast.success(data.message)
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const logout = async () => {
        try {
            axios.defaults.withCredentials = true

            const { data } = await axios.post(backendURL + '/api/auth/logout')
            data.success && setIsLoggedIn(false)
            data.success && setUserData(false)

            navigate('/')
            toast.success(data.message)
        } catch (error) {
            toast.error(error.message)
        }
    }

    return(
        <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0">
            <img src={assets.logo} alt="" className="w-32 sm:w-42"/>

            {userData ? 
                <div className="w-11 h-11 flex justify-center items-center rounded-full bg-slate-700 text-white relative group text-xl">
                    {userData.name[0].toUpperCase()}
                    <div className="absolute hidden group-hover:block top-0 mt-1 right-0 z-10 text-white pt-10">
                        <ul className="list-none m-0 p-2 bg-black text-sm rounded-lg">
                            {!userData.isAccountVerified && <li onClick={sendVerificationOTP} className="py-1 px-2 hover:bg-gray-700 cursor-pointer rounded-t-lg">Verify E-mail</li>}
                            <li onClick={logout} className="py-1 px-2 hover:bg-gray-700 cursor-pointer pr-10 rounded-b-lg">Logout</li>
                        </ul>
                    </div>
                </div>
            :
                <button onClick={() => navigate('/login')}
                    className="flex items-center gap-2 border border-white rounded-full px-6 py-2 text-white hover:bg-gray-700 transition-all cursor-pointer">Login
                    <img src={assets.arrow_icon} alt="" />
                </button>
            }
        </div>
    )
}

export default Navbar