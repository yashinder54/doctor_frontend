import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { Form, useNavigate, useParams } from "react-router-dom"

import axios from "axios"
import { Link } from "react-router-dom"

function UserViewSchedule() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.post("http://localhost:1000/api/schedule/getAllSchedule")
      .then((res) => {
        setData(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }
  )


  return (
    <>
      <section className="page-title bg-title overlay-dark">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="title">
                <h3>View Schedule</h3>
              </div>
              <ol className="breadcrumb p-0 m-0">
                <li className="breadcrumb-item">
                  <a href={'/home'}>Home</a>
                </li>
                <li className="breadcrumb-item active">view Schedule</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <div className="container table-responsive py-5">
        {/* <h2 className="text-center">View Category</h2> */}
        <div className="row">

                    {
                        data.map((el, index) => {
                            return (
                                <>
                                    <div className="col-md-6 py-1">
                                        <div className="card" style={{ minWidth: "100px" }}>
                                        {/* <img src={BASE_URL + el.thumbnail} class="card-img-top" alt="..."/> */}
                                            <div className="card-body">
                                                 <p className="card-text">Date :{el.date}
                                                </p>
                                                <p className="card-text">Day :{el.day}
                                                </p>

                                                <p className="card-text">Start Time :{el.start_time}
                                                </p>

                                    
                                                <p className="card-text">End Time :{el.end_time}</p>
                                                <p className="card-text">Doctor : {el.doctorId?.name}
                                                    
                                                </p>
                                                <p className="card-text">Specialization: {el.specializationId?.specializationName}
                                                    
                                                    </p>
                                                {/* <h5 className="card-title"></h5>
                                                <h5 className="card-title">{el.start_time}</h5>
                                                <h5 className="card-title">{el.end_time}</h5> */}
                                                <p className="card-text text-center">
                                                    <Link to={'/user/book/'+el._id} className="btn btn-success">Book</Link>
                                                    {/* <button onClick={() => { setJobId(el._id);setIsModalOpen(true) }} class="btn btn-primary">Apply</button> */}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
        {/* <table className="table table-bordered table-hover" >
          <tbody>
            <tr>
              <th>S.no</th>
              <th>Category</th>
              <th>Thumbnail</th>
           
            </tr>

            {
              data.map((el, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{el.categoryName}</td>
                    <td><img src={"http://localhost:1000/" + el.thumbnail} style={{ width: "200px" }} /></td>
                  </tr>
                )
              })
            }

          </tbody>
        </table> */}
      </div>
    </>
  )
}
export default UserViewSchedule
