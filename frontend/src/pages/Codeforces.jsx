import Navbar from "./Navbar"
import axios from "axios";
import { useState, useEffect } from "react";
function Codeforces() {
    var pg = true;
    console.log(localStorage.getItem("Codeforces"))
    useEffect(() => {
        const URL = `https://codehelper-xdml.onrender.com/codeforces/getProfile`;
        axios
          .get(URL, 
            {
                codeforces : localStorage.getItem("Codeforces")
            },
            {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            // console.log(response);
            if (response.status === 200) {
              console.log(response.data.content);
             
            } else {
              alert("Some error occurred.");
              return;
            }
          })
          .catch((err) => {
            alert(err);
            return;
          });
      }, []);
  return (
    <div>
        <Navbar pg = {pg}/>
    </div>
  )
}

export default Codeforces