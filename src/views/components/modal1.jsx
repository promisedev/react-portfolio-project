import { useEffect, useState } from 'react'
import { useRef} from 'react'
import services from '../services.json'
import {useGlobalContext} from '../../controllers/context_api'

const Modal1 = ()=>{
const service = useRef(null)
 const {serv_position,setserv_Position} = useGlobalContext()

 
useEffect(()=>{
	const posi = service.current; 

window.addEventListener('scroll',()=>{
let current_posi = posi.getBoundingClientRect().top

setserv_Position(current_posi)

 })

},[serv_position])

useEffect(()=>{
const posi = service.current; 
let current_posi = posi.getBoundingClientRect().top
setserv_Position(current_posi)
},[])




const showOverlay=(e)=>{
const c_target = e.currentTarget.children[3]	
c_target.classList.add('show_brand_overlay')

}
const removeOverlay=(e)=>{
const c_target = e.currentTarget.children[3]	
c_target.classList.remove('show_brand_overlay')

}
 


    return(
        <section className="what-i-do" id="services" ref={service}> 
			{/* ---------------------------------------------- */}
			<article className="descriptionm">
				<span> <h2>WHAT I DO</h2></span>
				<span> <h3> I Got  Everything You Need To Launch Your Business.</h3></span>
			</article>
			{/* -------------------------------------------------- */}
			<article className="flex-container">
				{/* ------------------------------------------- */}
				{ services.map((service,index)=>{


					return(
						<div className="flex-item" key={index} onMouseOver={showOverlay} onMouseOut={removeOverlay} >
			 	 <div className="icon-div" >
				 	 <img className="icon-image" src={service.icon}/>
					</div> 
					<div className="service_title">
				 	 {service.title}
				</div>
				<div className="txt-i-do">
					 {service.desc}
				</div>
					{/* --------------------- */}
					<div className='brand_overlay' style={{backgroundImage:`url(${service.bg})`, backgroundRepeat:'no-repeat', backgroundSize:'130% 100%'}}>

					</div>

			</div>
					)
				})}
				
				{/* ------------------------------------------------- */}
			</article>
			{/* ------------------------------------------------------ */}
			
			
		</section>
    )
}
export default Modal1