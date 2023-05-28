import { Link } from "react-router-dom"
import { useGlobalContext } from "../../controllers/context_api"
import pages from '../pages.json'

const Navigation = ()=>{

const {services} = useGlobalContext()	


 
 
    return(
        <article className="headline">
				<div className="logo-div" id="logo1"> 
					<span> <img  className="logo-image" src="../../graphics/logo.jpg"/> </span>
					
					
				</div>
				<div className="navigation-div"> 
					<ul className="nav-list">
						{pages.map((pages,index)=>{
						
						return(
						<li key={index} onClick={(e)=>services(e)}> <Link to={pages.link}>{pages.name}</Link></li>
						
						)})}
						
						</ul>
				</div>
</article>
    )
}

export default Navigation