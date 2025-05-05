import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

function Master(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Master