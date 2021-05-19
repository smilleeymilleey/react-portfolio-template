import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const IndexPage = () => (
<div>
  <Switch>
    <Route path="/">
      <Header></Header>
      <Footer></Footer>
    </Route>
    <Route path="/about">
      <About></About>
      <Footer></Footer>
    </Route>
    <Route path="/work">
      <Work></Work>  
      <Footer></Footer> 
    </Route>
    <Route path="/skills">
      <Skills></Skills>
      <Footer></Footer>
    </Route>
    <Route path="/promotion">
      <Promotion></Promotion>
      <Footer></Footer>
    </Route>
  </Switch>
    <SEO title="Caitlyn Miley" />
   
</div>
  
   
   
   
)

export default IndexPage
