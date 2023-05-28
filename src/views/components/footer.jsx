
import { useEffect, useRef } from "react"
import {Link} from 'react-router-dom'
import { useGlobalContext } from "../../controllers/context_api"
import footer from './footers.json'
import { Facebook, GitHub, Twitter, WhatsApp } from "@material-ui/icons"
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';

const Footer = ()=>{

const date = new Date().getFullYear()


const contact = useRef(null)
 const {cont_position,setcont_Position} = useGlobalContext()

 
useEffect(()=>{
	const posi = contact.current; 

window.addEventListener('scroll',()=>{
let current_posi = posi.getBoundingClientRect().top
// console.log(current_posi);
setcont_Position(current_posi)

 })

},[cont_position])

useEffect(()=>{
const posi = contact.current; 
let current_posi = posi.getBoundingClientRect().top
setcont_Position(current_posi)
},[])

const sendMail =(e)=>{
	e.preventDefault()
}

    return(
        <section className="footer1">
		 	
				<div className="f-description" ref={contact}>
				<span> <h2>CONTACT ME</h2></span>
				<span> <h3> Send A Message I Will Respond As Soon As Possible.</h3></span>
				</div>
				{/* --------------------------------------------------- */}
				<div className="message-cont" id="contact">
					<span><h4> SEND ME A MESSAGE</h4></span>
					<form>
						<input type="text" name="Fname" placeholder="Your name"/>
						<input type="text" name="Email" placeholder="Your Email"/>
						<input type="text" name="Subject" placeholder="Subject"/>
						<textarea name="message" maxLength="200" placeholder="Message..."/>
						<input type="submit" onClick={sendMail} value="SEND"/>

					</form>

				 </div>
				
				 	<div className="contact-flex">
				 		<div className="c-flex-item">
				 			<span><h5>EMAIL ME AT</h5></span>

				 			<div className='contact_link'>
								<span><EmailRoundedIcon/></span>kpali.promise@gmail.com</div>
							<div className='contact_link'>
								<span><EmailRoundedIcon/></span>kpali.promise@outlook.com</div>

				 		</div>
				 		{/* --------------------- */}
				 		<div className="c-flex-item">
				 			<span><h5>CALL ME</h5></span>
				 			
				 			<div className='contact_link'>
								<span><CallRoundedIcon/></span>(+234) 907  9523  857</div>	
				 			<div className='contact_link'>
								<span><CallRoundedIcon/></span>(+234) 703  1199  336</div>
				 				
				 		</div>
				 		
				 	</div>
				 
				 <div className="d-logo"> 
				 	<span><img className="d-logo-image" src="../../graphics/footerlogo.jpg"/></span>
				 	
				 </div>
				 {/* ------------------------------------------------- */}
					
				<div className="social"> 
					{
						footer.map((footer,index)=>{

							return(
								<span key={index}><Link to={footer.link}>{index==0&&<Facebook/>||
					index==1&&<Twitter/>||
					index==2&&<WhatsApp/>||
					index==3&&<GitHub/>}</Link>
				 	</span>
							)
						})
					}
				 	

				 </div>
				 {/* --------------------------------------------- */}
					<div className="copyright">
						<span> &copy; {date} kpalikustack  all rights reserved.</span>
					</div>
				 
		 </section>
    )
}

export default Footer