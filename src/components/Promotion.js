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
