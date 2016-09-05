import React from 'react'
import ReactDOM from 'react-dom'

// application components
import Header from './Header'
import Leaderboard from './Leaderboard'

class Layout extends React.Component {
	render() {
		return(
			<div>
				<Header/>
				<Leaderboard/>
			</div>
		)
	}
}

export default Layout