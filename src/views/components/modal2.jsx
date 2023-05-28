import { ArrowForward } from "@material-ui/icons"
import { Link } from "react-router-dom"

import project from '../project.json'

const Modal2 = ()=>{


    return(
<section className="project">
			<article className="project-container">
			{/* -------------------------------------------------- */}
				<div className="p-description">
				<span> <h2>MY RECENT PROJECT</h2></span>
				<span> <h3> Coding To Me Has Been A Fun And Is Always A Fun. Check Out My Recent Project.</h3></span>
				</div>
			{/* -------------------------------------------------------- */}
	 		<div className="p-flex-cont">
			{/* ------------------------------------------------------ */}
				{project.map((proj,index)=>{

                    if(index<4){
                        return(
                            <div className="p-flex-item" key={index}>
					<div className="p-image" style={{backgroundImage: `url(${proj.bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 105%'}}>
                        {/* <img  src="../../graphics/p1.jpg"/> */}
                    </div>
					<a href={proj.link} className="p-explore"><span>Explore</span>
                    <ArrowForward/></a>
				</div>
                        )
                    }
                })}
			{/* --------------------------------------------- */}
                </div>


			{/* ----------------------------------------------------- */}
			<div className="project_btn_cont">
                <Link to='/projects'>View all</Link>
            </div>
			{/* ----------------------------------------------------- */}
			</article>
		</section>
    )
}

export default Modal2