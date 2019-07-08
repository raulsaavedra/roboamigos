import React from 'react';

const SearchBox = ({searchChange}) => {
		console.log('Searchbox');
	return (
		<div className="pa2">
			<input 
			className="pa2 b--green bg-lightest-blue" 
			type="search" 
			placeholder="search robots"
			onChange = {searchChange}
			/>

		</div>
		);
};
export default SearchBox;