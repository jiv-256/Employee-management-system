import { useState } from "react"
import Login from "./components/Auth/Login"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    

    <Login />
    </>
  )
}

export default App
