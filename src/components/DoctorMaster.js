import DoctorHeader from "./DoctorHeader";
import DoctorFooter from "./DoctorFooter";
import { Outlet } from "react-router-dom";
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