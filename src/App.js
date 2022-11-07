import React, { Component } from "react";
import Places from "./components/Places";

class App extends Component {
	render() {
		return (
			<div className='App'>
				<h1>Where should we eat?</h1>
				<div className='container'>
					<Places />
				</div>
			</div>
		);
	}
}

export default App;
