import React from "react";
import "./homepage.css";
const Homepage = () => {
  return (
    <>

    {/* Homepage */}
      <section className="home" id="home">
        <div className="home-content">
          <h1>
            Hi, I'm <span>Parteek</span>
          </h1>
          <div className="text-animate">
            <h3>Frontend developer</h3>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem quia magni corrupti nisi esse? Pariatur omnis impedit
            debitis quaerat aperiam nihil, excepturi cum fuga! Rem, nisi
            dolorem.
          </p>
          <div className="btn-box">
            <a href="#" className="btn">Hire Me</a>
            <a href="#" className="btn">Let's Talk</a>
          </div>
        </div>
        <div className="home-sci">
            <a href="https://github.com/parteekahlawat" className="bx bxl-github"></a>
            <a href="https://www.linkedin.com/in/parteek-ahlawat-83596b226/" className="bx bxl-linkedin"></a>
        </div>  
      </section>


      
    </>
  );
};

export default Homepage;
