import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

function UserViewBook() {
    const [data, setData] = useState([])

   
    useEffect(() => {

        axios.post("http://localhost:1000/api/appointment/getAllappointment")
  
            .then((res) => {
                setData(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, )

      
  
    return (
        <>
  <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/assets/logo/ctbanner.png"
              className="card-img-bottom"
              alt="..."
              style={{ minHeight: "350px" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>View Booking<br/><Link to={"/adminmaster/dashboard"} className="nav-link" style={{fontSize:"15px",marginLeft:"-20px"}}>HOME/DEPARTMENT</Link> </h1>
            </div>
          </div>
        </div>
      </div>
            <div className="container table-responsive" style={{ overflow: "hidden" }}>
                <div className="row text-center">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 py-2"><h2>View Booking</h2></div>
                   


                </div>

                <table className="table table-bordered table-hover">
  <thead>
    <tr>
      <th>S no.</th>
      <th>Doctor</th>
      <th>Specialization</th>
      <th>Prescription</th>
      <th>Status</th>
    
    </tr>
  </thead>
  <tbody>
    {data.map((el, index) => (
      <tr key={el._id}>
        <td>{index + 1}</td>
        <td>{el.doctor}</td>
        <td>{el.specialization}</td>
        <td>{el.prescription}</td>
        <td>{el.status}</td>


      </tr>
    ))}
  </tbody>
</table>

            </div>
            
        </>
    )
}
export default UserViewBook