
import DoctorFooter from "./DoctorFooter";
import { Outlet } from "react-router-dom";
import DoctorHeader from "./DoctorHeader";
function DoctorMaster(){
    return(
        <>
        <DoctorHeader/>
        <Outlet/>
        <DoctorFooter/>
        </>

    )
}
export default DoctorMaster