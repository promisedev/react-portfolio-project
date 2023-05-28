import tools from '../tools.json'


const Modal3 = ()=>{

 
    return(
        <section className="tool" id="tools"> 
		 	{/* ------------------------------------------------ */}
				<article className="p-description">
				<span> <h2>MY DEVELOPING TOOLS </h2></span>
				<span> <h3 style={{color:'black'}}> I Work With Several Amazing Tools That Help Me Both As A Web Developer And As A Graphic Designer.</h3></span>
				</article>
		 	{/* --------------------------------------------------- */}
		 	<article className="t-flex-container">
		 		{/* ------------------------------------------ */}
		 		{
					tools.map((tool,index)=>{

						return(
							<div className="t-flex-item" key={index} >
		 			<span className='tool_img'><img src={tool.img} alt=""/></span>
					<span className='tool_title'>{tool.tag}</span>
		 		</div>
						) 
					})
				}
				
				{/* -------------------------------------------- */}
		 	</article>
		 	
		 </section>
    )
}


export default Modal3