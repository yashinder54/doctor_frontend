import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateSpecialization() {
  const [specialization, setspecialization] = useState("");

  const changeSpecialization= (event) => {
    setspecialization(event.target.value);
  };

  let param=useParams()
  const id=param.id
  useEffect(()=>{
      let data={
          _id:id
      }
      axios.post('http://localhost:3000/api/specialization/singleGetSpecialization',data)
      .then((res)=>{
              console.log(res.data)
              setspecialization(res.data.data.specializationName)
              
      })
  },[])
  const nav = useNavigate();
  const handleForm = (event) => {
    event.preventDefault()
    let data={
      _id:id,
      specializationName:specialization
    }
    axios.post("http://localhost:3000/api/specialization/update",data)
    .then(res=>{
      if(res.data.success == true){
        nav('/admin/updatespecialization')
        toast.error(res.data.message)

      }else{
        
        toast.success(res.data.message)
       
        nav('/admin/viewspecialization')

      }
    })
 
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleForm}>
          <div className="row my-3">
            <h1 className="text-center">Update Specialization</h1>
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
export default UpdateSpecialization
