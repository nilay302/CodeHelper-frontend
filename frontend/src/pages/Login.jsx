import "./Login.css";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {spiral} from "ldrs";
function Login() {
    spiral.register();
    const [loading, setLoading] = useState(true);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required*"),
      password: Yup.string()
        .min(8, "minimum 8 required")
        .required("Password is required*"),
    }),
    onSubmit: (values) => {
      console.log(values);
    //   console.log("Hii");
      setLoading(false);
      LoginHandler(values);
    },
  });

  const LoginHandler = (values) => {
    const URL = "https://codehelper-xdml.onrender.com/user/login";
    axios
      .post(
        URL,
        {
          username: values.username,
          password: values.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response)
        if (response.status === 200) {
            setLoading(true);
          const data = response.data;
          localStorage.setItem("userName", values.username);
        //   localStorage.setItem("token", data["token"]);
          console.log(data);
          console.log(response.status);
          console.log(values.username);
        //   alert("Successfully Logged In");
          window.location = "/home";
        }
      })
      .catch((err) => {
        setLoading(true);
        if (err.message === "Request failed with status code 400") {
          // setAlertCode(1);
          alert("Bad Request");
          return 0;
        }
        if (err.message === "Request failed with status code 404") {
          // setAlertCode(2);
          alert("You have entered an invalid username or password");
          return 0;
        }
        if (err.message === "Request failed with status code 401") {
          // setAlertCode(3);
          return 0;
        }
        // setAlertCode(4);
        return 0;
      });
    // values.username = "";
    values.password = "";
  }; 
  if (loading===true){
    return (
        <div>
          <section>
            {" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>{" "}
            <span></span> <span></span> <span></span> <span></span> <span></span>
            <div className="signin">
              <div className="content">
                <h2>Sign In</h2>
    
                <form className="form" onSubmit={(e) => {
                    console.log(e);
                    formik.handleSubmit(e)}}>
                  <div className="inputBox">
                    <input id="username" 
                    name="username" 
                    type="text" 
                    required  
                    value={formik.values.username} 
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                        console.log(e.target.value)
                        formik.handleChange(e);
                    }}/>{" "}
                    <i>Username</i>
                  </div>
                        {formik.touched.username && formik.errors.username ? (
                        <p className="error_login">{formik.errors.username}</p>
                        ) : null}
    
                  <div className="inputBox">
                    <input 
                    id="password"
                    name="password"
                    type="password" 
                    required 
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    onChange={(e) => {
                        console.log(e.target.value)
                        formik.handleChange(e);
                    }}/> <i>Password</i>
                  </div>
                        {formik.touched.password && formik.errors.password ? (
                        <p className="error_login">{formik.errors.password}</p>
                        ) : null}
    
                  <div className="links">
                    {" "}
                    <a href="#">Forgot Password</a> <a href="/signup">Signup</a>
                  </div>
    
                  <button type="submit" style={{border:0, borderRadius:"5px"}} className="inputBox">
                    <input type="submit" value="Login" />
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>);
  }
   if(loading===false){
    return(
        <div className="load">
            <l-spiral
            size="40"
            speed="0.9" 
            color="rgb(252,252,252)" 
            ></l-spiral>
        </div>
        
    )
   }
    
        
  
}

export default Login;
