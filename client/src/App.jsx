import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import VerifyEmail from "./pages/VerifyEmail.jsx"
import ResetPassword from "./pages/ResetPassword.jsx"
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/email-verify" element={<VerifyEmail/>}/>
        <Route path="/reset-password" element={<ResetPassword/>}/>
      </Routes>
    </div>
  )
}

export default App
