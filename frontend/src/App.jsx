import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [pythonResponse, setPythonResponse] = useState("")
  const [nodeResponse, setNodeResponse] = useState("")

  const getPythonResponse = async () => {
    const res = await axios.get('http://python_service:5000/to-node')

    console.log(res)
    if(res.status == 200){
      setPythonResponse(res.data.message)
    }
  }

  const getNodeResponse = async () => {
    const res = await axios.get('http://node_service:8000/')

    console.log(res)
    if(res.status == 200){
      setNodeResponse(res.data.message)
    }
  }

  useEffect(() => {
      getPythonResponse()
  }, []) 

  useEffect(() => {
    getNodeResponse()
  }, [])


  return (
    <>
      <h1>Python Response: <span>{ pythonResponse }</span></h1>
      <h1>Node Response: <span>{ nodeResponse }</span></h1>
    </>
  )
}

export default App
