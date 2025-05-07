import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const nav = useNavigate();
  const handleForm = (e) => {
    e.preventDefault()
    let data={
      email:email,
      password:password
    }
    axios.post('http://localhost:1000/api/user/login',data)
    .then((res)=>{
      console.log(res.data)
      if(res.data.success==true){
        toast.success(res.data.message)
        sessionStorage.setItem("userData",JSON.stringify(res.data.data))
        sessionStorage.setItem("userId",res.data.data._id)
        sessionStorage.setItem("token",res.data.token)
        localStorage.setItem("token",res.data.token)
        if(res.data.data.userType == 1){
          
          nav("/admin")
          
        }
        else if(res.data.data.userType == 2){
          nav("/user/viewschedule")

        }
        else if(res.data.data.userType == 3){
          nav("/doctor/schedule")

        }
        else{
          toast.error("You are not allowd to access this page")
        }

      }
    }).catch((err)=>{
      console.log(err);
    })
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleForm}>
          <div className="row my-3">
            <h1 className="text-center">Login</h1>
            <div class="col-2">Email</div>
            <div class="col-10">
              <input
                type="email"
                value={email}
                onChange={changeEmail}
                class="form-control"
              />
            </div>
            <div class="col-2"></div>
            <div class="col-10 py-3"></div>
            <div class="col-2">Password</div>
            <div class="col-10">
              <input
                type="password"
                value={password}
                onChange={changePassword}
                class="form-control"
              />
            </div>
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
export default Login;
