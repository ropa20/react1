import React from 'react'; //compulsory for writing jsx
function Card(props)      //function Card({name, email,id})
{
	//const {name, email}=props;	
	return(   //can return only one component div here for an example
		
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 '>
			<img alt='robots' src={`https://robohash.org/${props.id}?200x200`} />
			<div>
			 	<h2>{props.name}</h2>
			 	<p>{props.email}</p>
			</div>
		</div>





		);
}
export default Card;