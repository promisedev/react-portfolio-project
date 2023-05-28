import {Link} from 'react-router-dom'


const Profile = ()=>{


    return(
        <article className="overview_cont2" style={{
			backgroundImage:`url('../../../../graphics/mobile_dots.png')`,backgroundSize:'370px 350px',
			backgroundRepeat:'repeat',
		}}>
 
					<div className="avatar-div1">
						<div><Link to="/about"><img className="avatar-image" src="../../graphics/avatar.jpg" alt='avatar'/></Link></div>
					</div>

					<div className="overview-text"><h2> Hi! welcome to kpalikuSTACK, I'm promise a Front-end web developer. I create nice stuff that people and business use.</h2></div>

					<Link to="/about" className="half1"><div >  MORE ABOUT ME</div></Link> 

					</article>
    )
} 

export default Profile