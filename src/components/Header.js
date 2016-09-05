import React from 'react'
import ReactDOM from 'react-dom'
import $ from '../../node_modules/jquery/dist/jquery.min.js'


// Header component --------------------------------
class Header extends React.Component {
  constructor() {
    super();
    this.recentLeaders = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
    this.allTimeLeaders = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
    this.getRecentLeaders = this.getRecentLeaders.bind(this)
    this.getAllTimeLeaders = this.getAllTimeLeaders.bind(this)
  }
  
  // Call to get most recent leaders ------------------
  getRecentLeaders() {
    if($('#recent').children().length === 0) {
      $.getJSON(this.recentLeaders, function(json) {
        $.each(json, function(recentLeaders, camper) {
          let imgSrc = camper.img;
          $('#allTime').addClass('hidden');
          $('#recent').removeClass('hidden');
          $('#recent').append('<div class="well camper-row row-fluid">'+'<div class="img text-right col-xs-2"><img class="camperImg" src="'+imgSrc+'"/></div><div class="text-left col-xs-3"><span class="username">'+camper.username+'</span></div>'+'<div class="text-center col-xs-3"><span class="recent">'+camper.recent+'</span></div><div class="text-center col-xs-4"><span class="alltime">'+camper.alltime+'</span></div></div>');
        })
      });
    }
    else {
      $('#allTime').addClass('hidden');
      $('#recent').removeClass('hidden');
    }
    $('#footer, #infoKey').removeClass('hidden');
  }
  
  // Call to get all time leaders ------------------------
  getAllTimeLeaders() {
    if($('#allTime').children().length === 0) {
      $.getJSON(this.allTimeLeaders, function(json) {
        $.each(json, function(allTimeLeaders, camper) {
          let imgSrc = camper.img;
          $('#recent').addClass('hidden');
          $('#allTime').removeClass('hidden');
          $('#allTime').append('<div class="well camper-row row-fluid">'+'<div class="img text-right col-xs-2"><img class="camperImg" src="'+imgSrc+'"/></div><div class="text-left col-xs-3"><span class="username">'+camper.username+'</span></div>'+'<div class="text-center col-xs-3"><span class="recent">'+camper.recent+'</span></div><div class="text-center col-xs-4"><span class="alltime">'+camper.alltime+'</span></div></div>');
        })
      });
    }
    else {
      $('#recent').addClass('hidden');
      $('#allTime').removeClass('hidden');
    }
    $('#footer, #infoKey').removeClass('hidden');
  }
  render() {
    return(
      <div>
        <div id='header' className='container-fluidnavbar navbar-fixed-top'>
          <div className='text-center row-fluid'>
            <h1>FCC Leaderboard</h1>
          </div>
          <div className='row-fluid action-row text-center'>
            <div className='block text-center btn-group'>
              <button className='block btn btn-default col-xs-6' onClick={this.getAllTimeLeaders}>All Time Leaders</button>
              <button className='block btn btn-default col-xs-6' onClick={this.getRecentLeaders}>Recent Leaders</button>
            </div>
          </div>
          <div id='infoKey' className='hidden row-fluid'>
            <div className='text-center col-xs-4'>
              <span>Camper</span>
            </div>
            <div className='text-center col-xs-4'>
              <span>Recent Points</span>
            </div>
            <div className='text-center col-xs-4'>
              <span>All Time Points</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header