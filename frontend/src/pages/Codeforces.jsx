import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Codeforces() {
  const [content, setContent] = useState({});
  const [problems, setProblems] = useState({});

  useEffect(() => {
    const fetchCodeforcesData = async () => {
      try {
        const response = await axios.get(
          `https://codehelper-xdml.onrender.com/codeforces/getProfile?codeforces=${localStorage.getItem(
            "Codeforces"
          )}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          setContent(response.data.content);
          localStorage.setItem("Rating", response.data.content.rating);
          gettingProblems();
        } else {
          alert("Some error occurred.");
        }
      } catch (error) {
        alert(error.message);
      }
    };

    const gettingProblems = async () => {
      try {
        const response = await axios.get(
          `https://codehelper-xdml.onrender.com/codeforces/getTags?codeforces=${localStorage.getItem(
            "Codeforces"
          )}&rank=${localStorage.getItem("Rating")}&`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          setProblems(response.data.content);
        } else {
          alert("Some error occurred.");
        }
      } catch (error) {
        alert(error.message);
      }
    };

    fetchCodeforcesData();
  }, []);

  const renderPageAnalysis = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/codeforces/getAnalysis?codeforces=${localStorage.getItem(
          "Codeforces"
        )}&rank=${localStorage.getItem("Rating")}&`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Success");
      } else {
        alert("Some error occurred.");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Navbar pg={true} />
      <div className="main_content">
        <div className="col-md-3 ">
          <div className="osahan-account-page-left shadow-sm card-back h-100">
            <div className="border-bottom p-4">
              <div className="osahan-user text-center">
                <div className="osahan-user-media">
                  <img className="mb-4 rounded-pill shadow-sm mt-1" src={content.avatar} alt="profile" />
                  <div className="osahan-user-media-body">
                    <h3 className="mb-2">{localStorage.getItem("Codeforces")}</h3>
                    <h5 className="mb-2 mt-3"><b>Name:</b> {content.firstName + ' ' + content.lastName}</h5>
                    {/* ... other user details ... */}
                    <div className="osahan-user-text" dangerouslySetInnerHTML={{ __html: content.someHtmlField }} />
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
              <div className="tab-pane fade active show" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                <h2 className="font-weight-bold mt-0 mb-4">Recommended Questions:</h2>

                {Object.keys(problems).map((data, i) => (
                  <div className="bg-white card mb-4 order-list shadow-sm" key={i}>
                    <div className="gold-members p-4">
                      <h3>{data}</h3>
                      <hr />
                      <div>
                        {problems[data].map((p, j) => (
                          <a href={`https://${p[1]}`} key={j}>
                            <p className="problems">{p[0]}</p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Codeforces;
