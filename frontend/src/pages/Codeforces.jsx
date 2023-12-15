import Navbar from "./Navbar"
import axios from "axios";
import { useState, useEffect } from "react";
function Codeforces() {
    var pg = true;
    // console.log(localStorage.getItem("Codeforces"))
    const [content, getContent] = useState({});
    useEffect(() => {
        const URL = `https://codehelper-xdml.onrender.com/codeforces/getProfile?codeforces=${localStorage.getItem("Codeforces")}`;
        axios
          .get(URL, 
            {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            // console.log(response);
            if (response.status === 200) {
            //   console.log(response.data.content);
              getContent(response.data.content) 
              localStorage.setItem("Rating", response.data.content.rating);   
            } else {
              alert("Some error occurred.");
              return;
            }
          })
          .catch((err) => {
            alert(err);
            return;
          });
          gettingProblems();
          console.log(content.rating)
      }, []);

      const [problems, getProblems] = useState({});
      function gettingProblems(){
        // console.log(content.rating)
            const URL = `https://codehelper-xdml.onrender.com/codeforces/getTags?codeforces=${localStorage.getItem("Codeforces")}&rank=${localStorage.getItem("Rating")}&`;
            axios
              .get(URL, 
                {
                headers: {
                  "Content-Type": "application/json",
                },
              })
              .then((response) => {
                console.log(response);
                if (response.status === 200) {
                  console.log(response.data.content);
                  getProblems(response.data.content)
                 
                } else {
                  alert("Some error occurred.");
                  return;
                }
              })
              .catch((err) => {
                alert(err);
                return;
              });
      }

      function renderPageAnalysis() {
        const URL = `http://localhost:8080/codeforces/getAnalysis?codeforces=${localStorage.getItem("Codeforces")}&rank=${localStorage.getItem("Rating")}&`;
            axios
              .get(URL, 
                {
                headers: {
                  "Content-Type": "application/json",
                },
              })
              .then((response) => {
                console.log(response);
                if (response.status === 200) {
                  var htmlPage = response.data.content;
                  var box = document.getElementById('orders');
                  var box2 = document.getElementsByClassName('osahan-account-page-right')[0];
                  box2.classList.remove("osahan-account-page-right");
                  box2.classList.remove("shadow-sm");
                  box2.classList.remove("bg-white");
                  box2.classList.remove("p-4");
                  box2.classList.remove("h-100");
                  box.innerHTML = htmlPage;
                  var title = document.getElementsByClassName('header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600 is-casting-shadow')[0];
                  title.classList.remove("mdl-layout__header");
                  title.classList.remove("header");
                  title.classList.remove("mdl-color--grey-100");
                  title.classList.remove("mdl-color-text--grey-600")
                  title.classList.remove("is-casting-shadow");
                  title.innerHTML = "";
                  var form = document.getElementById('handleform');
                  form.innerHTML = "";
                  var footer = document.getElementsByClassName('share-div to-hide mdl-cell mdl-cell--12-col')[0];
                  footer.innerHTML = "";
                  // var profile = document.getElementsByClassName('col-md-3')[0];
                  // profile.classList.remove('col-md-3');
                  // profile.innerHTML = "";
                  return;
                 
                } else {
                  alert("Some error occurred.");
                  return;
                }
              })
              .catch((err) => {
                alert(err);
                return;
              });
      }
      
  return (
    <div>
        <Navbar pg = {pg}/>
        <div className="">
     <div className="row main_content">
        {/* part1 */}
        <div className="col-md-3 ">
            <div className="osahan-account-page-left shadow-sm card-back h-100">
                <div className="border-bottom p-4">
                    <div className="osahan-user text-center">
                        <div className="osahan-user-media">
                            <img className="mb-4 rounded-pill shadow-sm mt-1" src={content.avatar} alt="profile"/>
                            <div className="osahan-user-media-body">
                                <h3 className="mb-2">{localStorage.getItem("Codeforces")}</h3>
                                <h5 className="mb-2 mt-3"><b>Name:</b> {content.firstName + ' '+ content.lastName}</h5>
                                <h5 className="mb-2 mt-3"><b>Friends:</b> {content.friendOfCount}</h5>
                                <h5 className="mb-2 mt-3"><b>Country:</b> {content.country}</h5>
                                <h5 className="mb-2 mt-3"><b>City:</b> {content.city}</h5>
                                <h5 className="mb-2 mt-3"><b>Rank: </b>{content.rank}</h5>
                                <h5 className="mb-2 mt-3"><b>Rating:</b> {content.rating}</h5>
                                <h5 className="mb-2 mt-3"><b>Max Rank: </b>{content.maxRank}</h5>
                                <h5 className="mb-2 mt-3"><b>Max Rating:</b> {content.maxRating}</h5>
                                <h5 className="mb-2 mt-3"><b>Organization:</b> {content.organization}</h5>
                                <button onClick={renderPageAnalysis}>Profile Analysis</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-9">
            <div className="osahan-account-page-right shadow-sm bg-white p-4 h-100">
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane  fade  active show" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                        <h2 className="font-weight-bold mt-0 mb-4">Recommended Questions:</h2>

                        {
                            Object.keys(problems).map((data, i)=>{
                                return (
                                    <div className="bg-white card mb-4 order-list shadow-sm" key={i}>
                                        <div className="gold-members p-4">
                                            <h3>
                                                {data}
                                            </h3>
                                            <hr/>
                                            <div>
                                                {
                                                    problems[data].map((p, j)=>{
                                                        return (
                                                            <a href={`https://${p[1]}`} key={j}><p className="problems">{p[0]}</p></a>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Codeforces