import "./about.css";
import React from "react";

const Aboutpage = () => {
  return (
    <>
      <section className="about" id="about">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <div className="about-content">
          <h3>Frontend developer!</h3>
          <p>
            Hi, I'm <span>Parteek</span><br/>
            I'm a Frontend Developer in <span>React Js</span><br/>
            I'm currently in <span>IIT Jammu</span><br/>
            For my React projects you can refer to my github page - <a href="https://github.com/parteekahlawat" className="github">Parteek</a>
          </p>
          <div className="btn-box btns">
            <a href="https://www.linkedin.com/in/parteek-ahlawat-83596b226/" className="btn">Read More</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutpage;