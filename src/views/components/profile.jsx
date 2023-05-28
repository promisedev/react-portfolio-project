import {Link} from 'react-router-dom'


const Profile = ()=>{


    return(
        <article className="overview_cont"
	// 	style={{backgroundImage: `url("../../../graphics/bg.png")`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: '100% 100%'}}
	>
					<div className="avatar-div1">
						<Link to="/about"><img className="avatar-image" src="../../graphics/avatar.jpg" alt='avatar'/></Link>
						
					</div>

					<div className="overview-text"><h3> Hi, welcome to kpalikuSTACK, I'm promise a Front-end web developer. I create nice stuff that people and business use.</h3></div>

					<Link to="/about" className="half1"><div >  MORE ABOUT ME</div></Link> 

					</article>
    )
}

export default Profile