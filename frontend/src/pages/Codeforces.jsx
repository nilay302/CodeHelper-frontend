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

      const [problems, getProblems] = useState({});
      useEffect(() => {
        const URL = `https://codehelper-xdml.onrender.com/codeforces/getTags?codeforces=${localStorage.getItem("Codeforces")}?rank=${content.rank}`;
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
      }, []);
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

                        {/* {
                            content.map((data, i)=>{
                                return (
                                    <div className="bg-white card mb-4 order-list shadow-sm" key={i}>
                                        <div className="gold-members p-4">
                                            <h3>
                                                {data.topic}
                                            </h3>
                                            <hr/>
                                            <div>
                                                {
                                                    data.problems.map((p, j)=>{
                                                        return (
                                                            <a href={`https://${p.problem_link}`} key={j}><p className="problems">{p.problem_name}</p></a>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        } */}
                        
                        
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