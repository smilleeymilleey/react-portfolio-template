import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import Card from "./atoms/Card"


const Promotion = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="promotion-container">
         

          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>

            <h2>Caitlyn Miley</h2>
             <p>Dallas, Texas</p>
              <a><p>Phone:214-868-7223</p><p>Email: caitlynmiley.cm@gmail.com</p><p>Github: https://github.com/smilleeymilleey</p></a>

            <h2>Summary</h2>
              <p>Caitlyn has been programming professionally for 1 year. She holds a Bachelors of Science & Engineering, and a Full Stack Web Development Certificate from Southern Methodist University. Caitlyn has a background in Education and holds lifelong learning as a core personal value. She is effective at solving technical problems to develop user-friendly web based applications and is known amongst her peers for her attention to detail and friendly disposition. 
              </p>

            <h2>Technical Skills</h2>
              <p>Languages: HTML, CSS, Javascript, Git, MongoDb, Express, React, Node</p>
              <p>Applications: Github, Gitlab, VS Code, Atom, Linux, Netlify, Heroku, Wordpress</p>

            <h2>Relevant Experience</h2>
              <p>Role: Software Engineer</p>
              <p>Company Name: Latorly Enterprises</p>
              <p>Key Accomplishments:</p>
                <ul>
                  <li>Deployed a landing page and delivered in 3 weeks. Left over client satisfied with UX and responsiveness</li>
                </ul>

              <p>Role: Web Developer</p>
              <p>Company Name: How To Be Social</p>
              <p>Key Accomplishments:</p>
                <ul>
                  <li>Utilized my communication skills to interpret the design that was asked for, and created and managed the word press website.  </li>
                  <li>Department Leader- trained new interns on how to use wordpress</li>
                </ul>
              
            <h2>Education</h2>
              <p>Full Stack Web Development Certification - Southern Methodist University</p>
              <p>Bachelors Of Science and Engineering- Texas A&M University-Commerce</p>

            
            <Card
            key={5}
            imgUrl={data.header}
            projectLink={data.headerUrl}
            >
            </Card>
          </Fade>
          <p>{data.promotionPara}</p>
        </div>

        
      </div>
    </div>
  )
}

export default Promotion
