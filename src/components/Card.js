import React from "react";


const Card = ({id, name, email}) => {
	return (
		<div className="bg-light-green pa3 ma2 tc dib bw2 shadow-5 grow">
			<img src={`https://robohash.org/${id}hehe`} width="200" height="200" alt="robots"/>
			<div>
			<h2>{name}</h2>
			<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;
