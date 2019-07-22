import React, { Component } from 'react';
import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';
import SearchBox from '../components/SearchBox';
import Header from '../components/Header';

class MainPage extends Component {

	componentDidMount() {
		this.props.onRequestRobots();
	}

	filterRobots = () => {
		return this.props.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
	})
}

	render() {
		const {searchField, onSearchChange, robots, isPending} = this.props;
		
		return (
			<div className='tc'>
			<Header/>
			<SearchBox searchChange={onSearchChange} />
		  { isPending ? <h1>Loading</h1> : 
				<ErrorBoundry>
					<CardList robots={this.filterRobots()} />
				</ErrorBoundry>
			}
			</div>
			);
	}
}

export default MainPage
