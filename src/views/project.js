
import Navigation from './components/navigation'
import Navigation2 from './components/navigation2'

import Footer from './components/footer'
import SingleProject from './components/singleproject'
import projects from './project.json'
import { useEffect } from 'react'
import { SEO } from './components/seo'

const Project = ()=>{

// useEffect(()=>{
// 	document.title="Projects"
// },[])

    return (
      <section className="project_cont">
        <SEO
          title={"My Projects | KpalikuSTACK"}
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
        <article className="project_heading">
          <span>Projects</span>
        </article>
        <div className="project_lower">
          <p>
            These are few of the projects that i have worked on and allowed to
            share.
          </p>
        </div>

        <article className="project_body">
          {projects.map((proj, index) => {
            return <SingleProject props={proj} key={index} />;
          })}
        </article>
        <Footer />
      </section>
    );
}

export default Project