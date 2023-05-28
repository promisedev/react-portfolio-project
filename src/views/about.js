import Footer from "./components/footer"
import Navigation from "./components/navigation"
import Navigation2 from "./components/navigation2"

import { Facebook, GitHub, Twitter, LinkedIn,ExpandMore } from "@material-ui/icons"
import {Link} from 'react-router-dom'
import tools from '../views/tools.json'
import { useEffect } from "react"
import { SEO } from "./components/seo"



const About = ()=>{

// useEffect(()=>{
// 	document.title="About"
// },[])


const showMore = (e)=>{

e.currentTarget.classList.toggle('rotate_toggle')

 e.currentTarget.parentElement.children[1].classList.toggle('show_more_info')

}
    return (
      <section className="about_cont">
        <SEO
          title={"About me | KpalikuSTACK"}
          description={
            "Hi welcome to my world!. I am Promise a front-end web developer with over four years of experience in building front-end applications using my favorite recipe Javascript. My stacks are React,Nextjs, Gatsby, Nodejs, Express, MongoDB, etc "
          }
          image={"../../graphics/avatar.jpg"}
          keywords={[
            "web developer",
            "React",
            "Nodesj",
            "Freelance",
            "Remote work",
            "Work from home",
            "Nigeria developer",
            "Gatsby",
            "Nextjs",
          ]}
        />
        <Navigation />
        <Navigation2 />
        {/* ----------------------- */}
        <article className="about_container" id="about">
          <div className="about_item1">
            <div className="about_image">
              <img src="../../graphics/avatar.jpg" alt="avatar" />
            </div>
            <div className="about_name"> Promise Sunday Kpaliku</div>
            <div className="about_title"> Frontend Web Developer</div>

            {/* ------------------------------------------- */}
            <div className="about_action_cont">
              <a
                href="../../graphics/myresume.pdf"
                download
                className="about_resume"
              >
                My resume
              </a>
              <Link to="/project" className="about_action">
                View projects
              </Link>
            </div>

            <div className="about_social">
              <span>
                <Link to="https://facebook.com/promise.kpaliku/">
                  <Facebook />
                </Link>
              </span>

              <span>
                <Link to="https://twitter.com/kpalikusunday/">
                  <Twitter />
                </Link>
              </span>

              <span>
                <Link to="https://www.linkedin.com/in/promise-sunday-kpaliku-943768150/">
                  <LinkedIn />
                </Link>
              </span>

              <span>
                <Link to="https://github.com/promisedev">
                  <GitHub />
                </Link>
              </span>
            </div>
            {/* -------------------------------------- */}
          </div>

          <div className="about_item2 ">
            <div className="about_toggle" onClick={showMore}>
              <ExpandMore />
            </div>
            <div className="about_item">
              <p className="about_h1">About me</p>
              Hi! i'm Promise Sunday Kpaliku, from Nigeria. I am a{" "}
              <b>front-end developer</b> and also a graphic designer with a good
              knowlwdge of UI/UX designs and how to inplement them to actual
              code.{" "}
              <p>
                In the past <b>four years</b> of my tech career I have worked
                with several tech tools which has helped me as a developer-
                Html, Css, Javascript, Php, Sql, React.js, Node.js, Express.js
                Corel Draw, Adobe Illustrator etc.
              </p>
              <p className="about_h1">Competence</p>
              In my journey to become a proficient front-end developer and to
              advance into a fullstack web developer, i have acquired the
              following tech skills with which i have use in bulding web
              applications;
              {tools.map((tool, index) => {
                return (
                  <div className="my_tools" key={index}>
                    <span className="span1">
                      <span className="span2"></span>
                    </span>{" "}
                    {tool.tag}
                  </div>
                );
              })}
              {/* ---------------------- */}
              <p className="about_h1">Achievements</p>
              My ability to create restful APIs using Node.js, Express.js and
              MongoBd Atlass and consuming them using react.js makes me
              confident as i can build dynamic applications using these stacks.
              <p>
                {" "}
                I have built an e-Learning application using the MERN Stack,
                which has the potential of attracting millions of users, I made
                a Spotify clone, Qatar Airways clone using react.js, I have also
                built web applications using Plain Vanilla.js.
              </p>
            </div>
          </div>
        </article>
        {/* --------------------- */}
        <Footer />
      </section>
    );
}

export default About