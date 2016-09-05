import React from 'react'
import ReactDOM from 'react-dom'

// LeaderBoard component -----------------------------
class Leaderboard extends React.Component {
  render() {
    return (
      <div>
        <div className='hidden container-fluid' id='recent'></div>
        <div className='hidden container-fluid' id='allTime'></div>
      </div>
    )
  }
}

export default Leaderboard