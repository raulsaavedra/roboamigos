import { shallowToJson  } from 'enzyme-to-json';
import {shallow} from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('expect to render card component', () => {
	const mockColor= 'red'
	const counter = shallow(<CounterButton color={mockColor}/>);
	expect(shallowToJson(counter)).toMatchSnapshot();
})


it('correctly increments the counter', () => {
	const mockColor = 'red';
	const wrapper = shallow(<CounterButton color={mockColor} />);

	wrapper.find('[id="counter"]').simulate('click')
	expect(wrapper.state()).toEqual({count: 2})

})
