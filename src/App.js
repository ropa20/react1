import React, { Component } from 'react';
import CardList from '../components/CardList';

import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'



class App extends Component
{
	constructor()
	{
		super()   //compulsory for using this
		this.state={  //state is something that can change and affect our app 
			robots: [],
			searchfield:''
		}
	}

	componentDidMount()
	{
		fetch('https://jsonplaceholder.typicode.com/users') //fetch = window object

			.then(response=> response.json())
			.then(users=> this.setState({ robots:users }));
	}

	onSearchChange = (event) => {
	//when making own methods on a component, 
	//use =, => and this makes sure that the "this" value is according to where it was created, 
	//which is the App
	
		//console.log(event.target.value);
		this.setState({searchfield: event.target.value}) //default function for updating searchField
		
	}


	render()
	{
		//instead of using this.state everytime we can do destructuring
		//const {robots, searchfield}=this.state;
		const filteredRobots= this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		if(!this.state.robots.length)
			return <h1>LOADING...</h1>
		else
		{

			return(
				<div className='tc'>
					<h1>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div> 
			);
		}
	}
}
export default App;
