import { Outlet } from "react-router-dom/dist"
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"

const App = () => {
  return <div className="">
    <Header></Header>
    
    <Outlet></Outlet>
  </div>
}

export default App
