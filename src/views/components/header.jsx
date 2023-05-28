import { Link } from "react-router-dom"

import Navigation from "./navigation"
import Navigation2 from "./navigation2"
import Profile from "./profile"

const Header = ()=>{


    return(
        <section className="header"  style={{backgroundImage: `url("../../../graphics/desktop1-bg.jpg")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '1050px 700px'}}>

		<article className="header_bg">
			<Navigation/>
			
{/* ------------------------------------------------- */}
				<article className="overview">
					<Profile/>
					</article>


	{/* ---------------------------------------------------------- */}
				
				</article>
			</section>
    )
} 

export default Header