import React from 'react'
import { useNavigate } from 'react-router-dom'

function HospitalManagementSystem() {
  const navigate = useNavigate()

  function handleChannge() {
    navigate("/")
  }
  return (
    <>
      <h1>Hospita Management SYstem</h1>
      <button 
      className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-200 transform hover:scale-105"
      onClick={handleChannge}>
          Get Started
        </button>
    </>
  )
}

export default HospitalManagementSystem