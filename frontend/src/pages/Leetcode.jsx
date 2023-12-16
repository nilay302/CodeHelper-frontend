import Navbar from "./Navbar"
import axios from "axios";
import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
import './Leetcode.css'
function Leetcode() {
    var pg = false;
    // console.log(localStorage.getItem("Leetcode"))
    const [content, getContent] = useState([]);
    useEffect(() => {
        const URL = `https://codehelper-xdml.onrender.com/leetcode/getTags?leetcode=${localStorage.getItem("Leetcode")}`;
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
                getContent(response.data.content);
                console.log(content[0]);
             
            } else {
            //   alert("Some error occurred.");
              return;
            }
          })
          .catch((err) => {
            console.log(err)
            // alert(err);
            return;
          });
      }, []);

      const [profile, getProfile] = useState([]);
      const colors = ["#ffa600","#ff6361", "#bc5090", "#6c54c0","#312360", "#be968c", "#b4acfc", "#0a417a"]
    useEffect(() => {
        const URL = `https://codehelper-xdml.onrender.com/leetcode/getProfile?leetcode=${localStorage.getItem("Leetcode")}`;
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
                getProfile(response.data.content);
                // console.log(profile)
                console.log(colors)
             
            } else {
            //   alert("Some error occurred.");
              return;
            }
          })
          .catch((err) => {
            console.log(err)
            // alert(err);
            return;
          });
      }, []);
      const [profileAnalysis, getProfileAnalysis] = useState(false);
      const Questions =()=>{
        return(
            <div>
                <h2 className="font-weight-bold mt-0 mb-4">Recommended Questions:</h2>
                {/* <GetQuestions/> */}
                {
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
                }
            </div>    
        )
      }

      const changeAnalysis = () =>{
        getProfileAnalysis(!profileAnalysis);
      }
      

      
      
      const Analysis = () =>{
        // console.log(languages)
        const ldata={
            // labels: languages,
            labels:[profile.languagesList[0].language, profile.languagesList[1].language, profile.languagesList[2].language],
            datasets:[
                {
                    data: [profile.languagesList[0].noOfProblems, profile.languagesList[1].noOfProblems, profile.languagesList[2].noOfProblems],
                    backgroundColor: colors
                }
            ]
        };
        const levels = {
            labels:[
                "easy", "medium", "hard"
            ],
            datasets:[
                {
                    data:[profile.easy, profile.medium, profile.hard],
                    backgroundColor: colors
                }
            ]
        }
        const topics = {
            labels:[
                profile.tags[0].topic,profile.tags[1].topic,profile.tags[2].topic,profile.tags[3].topic,
                profile.tags[4].topic,profile.tags[5].topic, profile.tags[6].topic,profile.tags[7].topic
            ],
            datasets:[
                {
                    data:[profile.tags[0].noOfProblems, profile.tags[1].noOfProblems ,profile.tags[2].noOfProblems,profile.tags[3].noOfProblems,
                    profile.tags[4].noOfProblems,profile.tags[5].noOfProblems, profile.tags[6].noOfProblems, profile.tags[7].noOfProblems],
                    backgroundColor: colors
                }
            ]
        }
        const options = {

        }
        return(
            <div className="center">
                <h2>Languages Used</h2>
                <div className="piechart">
                <Pie
                   
                    data = {ldata}
                    options={options}
                >
                    </Pie>
                </div>
                <br/>
                <hr/>
                <h2>Difficulty wise Problems Solved</h2>
                <div className="piechart">
                <Pie
                   
                    data = {levels}
                    options={options}
                >
                    </Pie>
                </div>
                <br/>
                <hr/>
                <h2>Topic Wise Questions</h2>
                <div className="piechart">
                <Pie
                   
                    data = {topics}
                    options={options}
                >
                    </Pie>
                </div>

                
            </div>
        )
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
                            <img className="mb-4 rounded-pill shadow-sm mt-1" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="profile"/>
                            <div className="osahan-user-media-body">
                                <h3 className="mb-2">{localStorage.getItem("Leetcode")}</h3>
                                <br/>
                                <h5 className="mb-2 mt-3"><b>Rating:</b> {profile.rating}</h5>
                                <h5 className="mb-2 mt-3"><b>Rank: </b>{profile.rank}</h5>
                                <h5 className="mb-2 mt-3"><b>Level:</b> {profile.level}</h5>
                                <h5 className="mb-2 mt-3"><b>views:</b> {profile.views}</h5>
                                <h5 className="mb-2 mt-3"><b>Solved Questions:</b> {profile.solved}</h5>
                                <h5 className="mb-2 mt-3"><b>Easy:</b> {profile.easy}</h5>
                                <h5 className="mb-2 mt-3"><b>Medium:</b> {profile.medium}</h5>
                                <h5 className="mb-2 mt-3"><b>Hard:</b> {profile.hard}</h5>
                                <h5 className="mb-2 mt-3"><b>No. of Contests:</b> {profile.noOfContests}</h5>
                                <h5 className="mb-2 mt-3"><b>Country:</b> {profile.country}</h5>
                                <h5 className="mb-2 mt-3"><b>College:</b> {profile.college}</h5>
                                <button className="profileAnalysis" onClick={changeAnalysis}>{profileAnalysis?"Questions":"Profile Analysis"}</button>

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
                  {!profileAnalysis ? <Questions/> : <Analysis/>}         
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Leetcode