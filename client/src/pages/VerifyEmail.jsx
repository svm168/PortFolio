import React, { useContext, useEffect, useRef } from "react"
import { assets } from "../assets/assets"
import axios from "axios"
import { AppContext } from "../context/AppContext"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

function VerifyEmail() {

  const { backendURL, isLoggedIn, userData, getUserData } = useContext(AppContext)
  axios.defaults.withCredentials = true
  const navigate = useNavigate()
  const inputRefs = useRef([])

  const handleInput = (event, index) => {
    if(event.target.value.length > 0 && index < inputRefs.current.length - 1){
      inputRefs.current[index + 1].focus()
    }
  }

  const handleKeyDown = (event, index) => {
    if(event.key === 'Backspace' && event.target.value === '' && index > 0){
      inputRefs.current[index-1].focus()
    }
  }

  const handlePaste = (event) => {
    const paste = event.clipboardData.getData('text')
    const pasteArray = paste.split('')
    pasteArray.forEach((char, index) => {
      if(inputRefs.current[index]){
        inputRefs.current[index].value = char
      }
    });
  }

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault()
      const otpArray = inputRefs.current.map(event => event.value)
      const otp = otpArray.join('')

      if (otp.length !== 6) {
        toast.error('Please enter a valid 6-digit otp')
        return
      }

      const { data } = await axios.post(`${backendURL}/api/auth/verify-account`, {otp})

      if(data.success){
        toast.success(data.message)
        getUserData()
        navigate('/')
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if(isLoggedIn){
      userData && userData.isAccountVerified && navigate('/')
    }
    else{
      navigate('/login')
    }
  }, [isLoggedIn, userData])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#2c0a0d] via-[#3a0e22] to-[#0d0a1a]">
      <img src={assets.logo} alt="" className="absolute left-5 sm:left-20 top-5 w-32 sm:w-42 cursor-pointer"
      onClick={() => navigate('/')}/>

      <form onSubmit={onSubmitHandler} className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm">
        <h1 className="text-white text-3xl font-semibold text-center mb-4">Email Verify otp</h1>
        <p className="text-center mb-6 text-indigo-300">Enter the 6-digit code sent to your E-mail ID.</p>
        <div className="flex justify-between mb-8" onPaste={handlePaste}>
          {Array(6).fill(0).map((_, index) => (
            <input type="text" maxLength='1' key={index} required
            className="w-12 h-12 bg-[#333A5C] text-white text-center text-xl rounded-md"
            ref={event => inputRefs.current[index] = event}
            onInput={event => handleInput(event, index)} onKeyDown={event => handleKeyDown(event, index)} />
          ))}
        </div>
        <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-indigo-900 text-white rounded-full cursor-pointer">Verify Email</button>
      </form>
    </div>
  )
}

export default VerifyEmail