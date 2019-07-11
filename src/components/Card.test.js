import { shallowToJson  } from 'enzyme-to-json';
import {shallow} from 'enzyme';
import React from 'react';
import Card from './Card';

it('expect to render card component', () => {
	const card = shallow(<Card />);
	expect(shallowToJson(card)).toMatchSnapshot();
})