import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

function ViewDoctor() {
    const [data, setData] = useState([])
    const [isDelete,setIsDelete]=useState(false)

   
    useEffect(() => {

        axios.post("http://localhost:1000/api/doctor/getAllDoctor")
  
            .then((res) => {
                setData(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [isDelete])
    const deleteData = (id) => {
        let data = {
            _id: id,
        }
        axios.post("http://localhost:1000/api/doctor/deleteDoctor", data)
       
            .then((res => {
                if (res.data.success == true) {
                    toast.success(res.data.message)
                    setIsDelete(true)
                } else {
                    toast.error(res.data.message)
                }
            }))
            .catch((err) => {
                console.log(err)
            })
        setIsDelete(false)
    }
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
        
<div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/assets/images/medium.jpg" className="" alt="" />
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
                            <th>Doctor Name</th>
                            <th>Specialization</th>

                            <th>Contact</th>

                            {/* <th>View</th> */}
                            {/* <th>Edit</th> */}
                            <th>Delete</th>
                        </tr>

                        {
                            data.map((el, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{el.name}</td>
                                        <td>{el.specializationId?.specializationName}</td>

                                        
                                        <td>{el.contact}</td>

                                        {/* <td>
                                            <Link to={"/singleview/" + el._id}><i className="bi bi-eye btn btn-outline-primary"></i></Link>
                                        </td> */}
                                        {/* <td><Link to={'/admin/updatespecialization/' + el._id}><i className="bi bi-pen btn btn-outline-success "></i></Link> </td> */}
                                        <td><button className="btn btn-outline-danger" onClick={() => { deleteData(el._id); }}><i className="bi bi-trash"></i></button></td>
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
export default ViewDoctor