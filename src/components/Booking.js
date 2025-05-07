import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { toast } from "react-toastify"
// useParams
function Booking() {
    const [name, setDoctor] = useState("");
  const [specialization,setSpecialization] = useState("")
  const [prescription,setprescription] = useState("")


    let param=useParams()
    const id=param.id


useEffect(()=>{
  let data={
      _id:id
  }

axios.post('http://localhost:1000/api/schedule/singleGetSchedule',data)
  .then((res)=>{
      setDoctor(res.data.data.doctorId?.name)
      setSpecialization(res.data.data.specializationId?.specializationName)

  })
},[])



const handleForm = (e) => {
  e.preventDefault();
  const data = {
    
    doctor: name,
    specialization: specialization,
    prescription:prescription
  };

  axios.post('http://localhost:1000/api/appointment/addAppointment', data)
    .then(res => {
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    })
    .catch(err => {
      toast.error("Booking failed");
    });
};


    return (
        <>
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">Add Booking</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Booking</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <h1 className="text-center">Add Booking</h1>
                <form onSubmit={handleForm}>
                    <div className="row">

                   


                        <div className="col-6">
                            <label>prescription</label>
                            <input type="text" value={prescription} onChange={(e) => setprescription(e.target.value)} className="form-control" required />
                        </div>


 
                        <div className="col-12">
                       Doctor <input type="text" value={name} onChange={(e) => setDoctor(e.target.value)} className="form-control" readOnly />
                            
               
                    </div>
                    
                    <div className="col-12">
                       Specialization <input type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} className="form-control" readOnly />
                            
               
                    </div>


                        <div className="col-12 py-3">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>

                    </div>
                </form>
            </div>
        </>
    );
}

export default Booking;
