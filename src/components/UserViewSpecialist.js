import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

function UserViewSpecialist() {
    const [data, setData] = useState([])
  
   
    useEffect(() => {

        axios.post("http://localhost:1000/api/specialization/getAll")
  
            .then((res) => {
                setData(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
  
    const customStyles = {
        content: {
            width: '50%',
            height: '40%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
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
              <h1 style={{ marginBottom: "90px", fontFamily: "fantasy" }}>View Specialization<br/><Link to={"/adminmaster/dashboard"} className="nav-link" style={{fontSize:"15px",marginLeft:"-20px"}}>HOME/DEPARTMENT</Link> </h1>
            </div>
          </div>
        </div>
      </div>
            <div className="container table-responsive" style={{ overflow: "hidden" }}>
                <div className="row text-center">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 py-2"><h2>Manage Specialization</h2></div>
                    {/* <div className="col-md-4 py-2 text-end">
                    <Link to={"/adminmaster/updatedep"} className="btn btn-primary btn-lg ">Add</Link>
                </div> */}


                </div>


                <table class="table table-bordered table-hover" style={{ minWidth: 100 }}>
                    <tbody>
                        <tr>
                            <th>S no.</th>
                            <th>Specialization Name</th>
                       
                        </tr>

                        {
                            data.map((el, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{el.specializationName}</td>

                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
            
     

        </>
    )
}
export default UserViewSpecialist