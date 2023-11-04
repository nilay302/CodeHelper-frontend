import './Login.css'
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
function SignUp() {
    const formik = useFormik({
        initialValues: {
          username: "",
          password: "",
          codeforces:"",
          leetcode:"",
        },
        validationSchema: Yup.object({
          username: Yup.string().required("Username is required*"),
          password: Yup.string()
            .min(8, "minimum 8 required")
            .required("Password is required*"),
          codeforces: Yup.string().required("Codeforces ID is required*"),
          leetcode: Yup.string().required("Leetcode ID is required*"),
        }),
        onSubmit: (values) => {
          console.log(values);
          LoginHandler(values);
        },
      });
    
      const LoginHandler = (values) => {
        const URL = "https://codehelper-xdml.onrender.com/user/signup";
        axios
          .post(
            URL,
            {
              username: values.username,
              password: values.password,
              leetcode: values.leetcode,
              codeforces: values.codeforces
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
              const data = response.data;
              localStorage.setItem("userName", values.username);
            //   localStorage.setItem("token", data["token"]);
              console.log(data["token"]);
              console.log(response.status);
              console.log(values.username);
              alert("Successfully Logged In");
              window.location = "/admin";
            }
          })
          .catch((err) => {
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
            <h2>Sign Up</h2>

            <form className="form" onSubmit={(e) => {
                console.log(e);
                formik.handleSubmit(e)}}>
              <div className="inputBox">
                <input type="text"
                 required
                 id="username" 
                 name="username"
                 value={formik.values.username} 
                onBlur={formik.handleBlur}
                onChange={(e) => {
                    console.log(e.target.value)
                    formik.handleChange(e);
                }}/> <i>Username</i>
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
                }} /> <i>Password</i>
              </div>
              {formik.touched.password && formik.errors.password ? (
                    <p className="error_login">{formik.errors.password}</p>
                    ) : null}

              <div className="inputBox">
                <input 
                id="codeforces"
                name="codeforces"
                type="text" 
                required 
                value={formik.values.codeforces}
                onBlur={formik.handleBlur}
                onChange={(e) => {
                    console.log(e.target.value)
                    formik.handleChange(e);
                }} /> <i>Codeforces ID</i>
              </div>
              {formik.touched.codeforces && formik.errors.codeforces ? (
                    <p className="error_login">{formik.errors.codeforces}</p>
                    ) : null}
              <div className="inputBox">
                <input 
                id="leetcode"
                name="leetcode"
                type="text" 
                required 
                value={formik.values.leetcode}
                onBlur={formik.handleBlur}
                onChange={(e) => {
                    console.log(e.target.value)
                    formik.handleChange(e);
                }} /> <i>Leetcode ID</i>
              </div>
              {formik.touched.leetcode && formik.errors.leetcode ? (
                    <p className="error_login">{formik.errors.leetcode}</p>
                    ) : null}

              <div className="links">
                {" "}
                <a href="#"></a> <a href="/">SignIn</a>
              </div>

              <button type="submit" style={{border:0, borderRadius:"5px"}} className="inputBox">
                <input type="submit" value="Sign Up" />
              </button>
            </form>

          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
