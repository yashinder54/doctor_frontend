import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Specialization() {
  const [specialization, setspecialization] = useState("");

  const changeSpecialization= (event) => {
    setspecialization(event.target.value);
  };

  const nav = useNavigate();
  const handleForm = (event) => {
    event.preventDefault()
    let data={
      specializationName:specialization
    }
    axios.post("http://localhost:3000/api/specialization/add",data)
    .then(res=>{
      if(res.data.success){
        toast.success(res.data.message)
        nav('/admin/viewspecialization')
      }else{
        
        nav('/admin/addspecialization')
        toast.error(res.data.message)
      }
    })
 
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleForm}>
          <div className="row my-3">
            <h1 className="text-center">Add Specialization</h1>
            <div class="col-2">specialization Name</div>
            <div class="col-10">
              <input
                type="text"
                value={specialization}
                onChange={changeSpecialization}
                class="form-control"
              />
            </div>
            <div class="col-2"></div>
            <div class="col-10 py-3"></div>
         
            <div class="col-2">
              <button type="submit" value="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Specialization
