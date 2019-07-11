import { shallowToJson  } from 'enzyme-to-json';
import {shallow} from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render card component', () => {
	const mockRobots = [
		{
			id: 1,
			name: 'John Snow',
			username: 'JohnJohn',
			email: 'john@gmail.com'
		}
	]
	const card = shallow(<CardList robots={mockRobots}/>);
	expect(shallowToJson(card)).toMatchSnapshot();
})

