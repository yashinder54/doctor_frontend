import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  // const nav = useNavigate();
  const handleForm = (e) => {
    e.preventDefault()
    if (email == "admin@gmail.com" && password == "123") {
      console.log("valid user");
      toast.success("login succesfully!!");
    } else {
      console.log("invalid user");
      toast.error("invalid user");
      //error , warning, sucess info
    }
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
