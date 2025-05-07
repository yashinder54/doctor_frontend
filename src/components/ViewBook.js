import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

function ViewBook() {
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
    const changestatus = (id, status) => {
        let data = {
          _id: id,
          status: status
        };
      
        axios.post("http://localhost:1000/api/appointment/status", data)
          .then((res) => {
            if (res.data.success === true) {
              toast.success(res.data.message);
              // Optionally, refresh the data after status change
              axios.post("http://localhost:1000/api/appointment/getAllappointment")
                .then((res) => setData(res.data.data))
                .catch((err) => console.log(err));
            } else {
              toast.error(res.data.message);
            }
          })
          .catch((err) => {
            console.log(err);
            toast.error("Failed to update status");
          });
      };
      
  
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
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {data.map((el, index) => (
      <tr key={el._id}>
        <td>{index + 1}</td>
        <td>{el.doctor}</td>
        <td>{el.specialization}</td>
        <td>{el.prescription}</td>

        {/* Show status with color */}
        <td>
          <span className={`badge ${
            el.status === "approved"
              ? "bg-success"
              : el.status === "declined"
              ? "bg-danger"
              : "bg-warning text-dark"
          }`}>
            {el.status}
          </span>
        </td>

        {/* Show action buttons only when status is pending */}
        <td>
          {el.status === "pending" && (
            <>
              <button
                className="btn btn-success btn-sm mx-1"
                onClick={() => changestatus(el._id, "approved")}
              >
                Approve
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => changestatus(el._id, "declined")}
              >
                Decline
              </button>
            </>
          )}
        </td>
      </tr>
    ))}
  </tbody>
</table>

            </div>
            
        </>
    )
}
export default ViewBook