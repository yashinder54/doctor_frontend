import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";
import { Outlet } from "react-router-dom";
function AdminMaster(){
    return(
        <>
        <AdminHeader/>
        <Outlet/>
        <AdminFooter/>
        </>

    )
}
export default AdminMaster