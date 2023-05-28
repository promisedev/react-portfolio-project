import { useEffect } from "react";



const Singleproject = (props)=>{
const info = props.props;



    return( 
        <article className='single_project'>
    <div className="project_thumb" style={{backgroundImage: `url(${info.bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 105%'}}></div>
    <div className="project_title">{info.title}</div>
        <div className="project_tools">
            {
                info.tools.map((tool,index)=>{

                    return(
                       <div className="p_tool" key={index}>{tool}</div> 
                    )
                })
            }
            
        </div>
<div className="project_button">
    <a  href={info.link}className="project_btn">Get code</a>
</div>

</article>
    )
}

export default Singleproject