import PatientHeader from "./PatientHeader";
import PatientFooter from "./PatientFooter";
import { Outlet } from "react-router-dom";
function PatientMaster(){
    return(
        <>
        <PatientHeader/>
        <Outlet/>
        <PatientFooter/>
        </>

    )
}
export default PatientMaster