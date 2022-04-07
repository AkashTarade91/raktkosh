import React, { Component } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

export default function ToastDemo(props) {
    const notify = () =>{
        toast(props.info)
    }
  return (
      <div>
         <button onClick={notify}>Notify!</button> 
      </div>
    )
}
