import { useState } from "react"
import Login from "./components/Auth/Login"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    

    {/* <Login /> */}
    <EmployeeDashboard />
    </>
  )
}

export default App
