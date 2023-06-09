import "./edu.css";
import React from "react";

const Edupage = () => {
  return (
    <>
      <section className="education" id="education">
        <h2 className="heading">
          My <span>journey</span>
        </h2>
        <div className="education-row">
          <div className="education-column">
            <h3 className="title">Education</h3>

            <div className="education-box">
            <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i class="bx bxs-calendar"></i>2021-2025
                  </div>
                  <h3>B Tech. in Mechanical Engineering - IIT Jammu</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dicta officiis accusamus et a vel omnis repellat architecto
                    excepturi quaerat suscipit.
                  </p>
                </div>
              </div>
            <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i class="bx bxs-calendar"></i>2019-2020
                  </div>
                  <h3>12th Standard - University Campus School</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dicta officiis accusamus et a vel omnis repellat architecto
                    excepturi quaerat suscipit.
                  </p>
                </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Edupage;
