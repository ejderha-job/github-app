import { RouterProvider } from "react-router-dom"
import { router } from "../config/router/router"
import "./App.module.css"

const App = () => {
  return <RouterProvider router={router} />
} 
  
export default App