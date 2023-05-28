import Header from "./components/header"
import Header2 from "./components/header2"
import Modal1 from "./components/modal1"
import Modal2 from "./components/modal2"
import Modal3 from "./components/modal3"
import Footer from "./components/footer"
import { useEffect } from "react"
import { SEO } from "./components/seo"


const Home = ()=>{

//     useEffect(()=>{
// 	document.title="Promise sunday kpaliku"
// },[])
    return(

        <section>
<SEO  title={"Home | KpalikuSTACK"} description={"Hi welcome to my world!. I am Promise a front-end web developer with over four years of experience in building front-end applications using my favorite recipe Javascript. My stacks are React,Nextjs, Gatsby, Nodejs, Express, MongoDB, etc "} image={"../../graphics/avatar.jpg"} keywords={["web developer","React","Nodesj","Freelance", "Remote work", "Work from home", "Nigeria developer", "Gatsby", "Nextjs"]}/>
            <Header/> 
            <Header2/>
            <Modal1/>
            <Modal2/>
            <Modal3/>
<Footer/>
            
        </section>
        
		
    )
}

export default Home