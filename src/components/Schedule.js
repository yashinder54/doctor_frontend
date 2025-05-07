import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// useEffect
function Schedule() {
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [start_time, setstarttime] = useState("");
  const [end_time, setendtime] = useState("");
    const [doctorId, setDoctor] = useState("")
    const [doctorData, setDoctorData] = useState([])
  const [specializationId, setSpecialization] = useState("")
  const [specializationIdData, setSpecializationData] = useState([])
  useEffect(() => {
 
    axios.post("http://localhost:1000/api/specialization/getAll")
      .then((res) => {
        console.log(res.data)
        setSpecializationData(res.data.data)
      })
  }, [])

    
  useEffect(() => {

    axios.post("http://localhost:1000/api/doctor/getAllDoctor")
      .then((res) => {
        console.log(res.data)
        setDoctorData(res.data.data)
      })
  }, [])
  const nav = useNavigate();
  const handleForm = (event) => {
    event.preventDefault()
    let data={
      date:date,
      day:day,
      start_time:start_time,
      end_time:end_time,
      doctorId:doctorId,
      specializationId: specializationId

    }
    axios.post("http://localhost:1000/api/schedule/addSchedule",data)
    .then(res=>{
      if(res.data.success){
        toast.success(res.data.message)
        nav('/doctor/viewschedule')
      }else{
        
        nav('/doctor/schedule')
        toast.error(res.data.message)
      }
    })
 
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleForm}>
          <div className="row my-3">
            <h1 className="text-center">Add Schedule</h1>
            <div class="col-2">Date</div>
            <div class="col-10">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                class="form-control"
              />
            </div>
            <div class="col-2">Day</div>
            <div class="col-10">
              <input
                type="text"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                class="form-control"
              />
            </div>

            <div class="col-2">Start Time</div>
            <div class="col-10">
              <input
                type="time"
                value={start_time}
                onChange={(e) => setstarttime(e.target.value)}
                class="form-control"
              />
            </div>

            <div class="col-2">End Time</div>
            <div class="col-10">
              <input
                type="time"
                value={end_time}
                onChange={(e) => setendtime(e.target.value)}
                class="form-control"
              />
            </div>
            <div class="col-2">Specialization</div>
            <div class="col-10">
            <select
                //   id="specialization"
                className="form-control"
                value={specializationId}
                onChange={(e) => setSpecialization(e.target.value)}

              >
                <option value="" disabled>Choose Specialization</option>
                {specializationIdData.map((el) => (
                  <option value={el._id}> {el.specializationName}
                  </option>
                ))}
              </select>
            </div>
            <div class="col-2">Doctor</div>
            <div class="col-10">
            <select
                //   id="specialization"
                className="form-control"
                value={doctorId}
                onChange={(e) => setDoctor(e.target.value)}

              >
                <option value="" disabled>Choose Doctor</option>
                {doctorData.map((el) => (
                  <option value={el._id}> {el.name}
                  </option>
                ))}
              </select>
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
export default Schedule
