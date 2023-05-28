import pages from '../pages.json'
import { Link } from "react-router-dom"
import { useGlobalContext } from "../../controllers/context_api"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useRef } from 'react';
import AssignmentTurnedInRoundedIcon from '@material-ui/icons/AssignmentTurnedInRounded';
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';
import WidgetsRoundedIcon from '@material-ui/icons/WidgetsRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import footer from './footers.json'
import { Facebook, GitHub, Twitter, WhatsApp } from "@material-ui/icons"
const Navigation = ()=>{

const nav = useRef(null)

    const showMenu =(e)=>{
const children = e.currentTarget.parentElement;
const child = children.parentElement.children[1]
// console.log(child);
child.classList.add('show_item')
    }
const closeMenu = ()=>{
const navi = nav.current;
navi.classList.remove('show_item')

}
    const {services} = useGlobalContext()	


    return(
         <section className="headline2" >
			{/* //---------------------- */}
			<div className='nav_center'>
            <article className="nav1" onClick={showMenu}><MenuIcon/></article>
            <article className="logo-div1"> 
							 <img  src="../../graphics/logo.jpg" alt='logo'/>
							
						</article>
				</div>
				{/* --------------------------------- */}
					<article className="nav-content" id="myDropdown" ref={nav}>
						<div className='nav_center2'>
                        <div className="nav1" onClick={closeMenu}><CloseIcon/></div>
						<div className="logo-div2"> 
							 <img  src="../../graphics/footerlogo.jpg" alt='footer logo'/>							
						</div>
						</div>
						<div className="list">
					
						{pages.map((pages,index)=>{
						
						return(
						<Link to={pages.link}className=" list-m" key={index} onClick={(e)=>services(e)} >
							<span className='list_icon'>
							{index==0&&<VerifiedUserRoundedIcon/>||
							index==1&&<WidgetsRoundedIcon/>||
							index==2&&<PhoneRoundedIcon/>||
							index==3&&<AssignmentTurnedInRoundedIcon/>||
							index==4&&<HomeRoundedIcon/>
							}
							</span>
							{pages.name}</Link>
						
						)})}
						</div>

						<div className="content-txt"> <h3>{`Hello! welcome to Kpalikustack, my name is Promise i am a Frontend web developer and i love to code.`} </h3></div>

						<div className='nav_social'>
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
					</article>
					
				</section>
				
    )
}

export default Navigation;