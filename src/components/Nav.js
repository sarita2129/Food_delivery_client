import React, { Component } from 'react';
// import {browserHistory} from 'react-router';
// import {browserHistory} from 'react-router';
// import $ from 'jquery';
import { Link } from 'react-router-dom';
import Login from './Login';
// import jwtDecode from 'jwt-decode';
// import './Nav.css'
const SERVER_URL = "https://foodserverapp.herokuapp.com/";

class Nav extends Component{
  constructor(){
    super();
    this.state = {
      username: undefined,
      user: undefined
    };
    // $('#myModal').on('shown.bs.modal', function () {
    //    $('#myInput').trigger('focus')
    //  })
    // this.updateCity = this.updateCity.bind(this);
  }
  componentDidMount () {
    // alert('1');
  const token = window.localStorage.getItem('jwt');
  const username = window.localStorage.getItem('username');
  const email = window.localStorage.getItem('email');
  const userid = window.localStorage.getItem('userid');

  // let nv;
  if (token !== "undefined") {
    // nv = jwtDecode(token);
    // alert('2');
    fetch(SERVER_URL+"verify?token="+token)
    .then(res => res.json())
    .then(json => {
      if(json.success)
      {
        this.setState({
          token,
          username:username,
          user: `Welcome ,${username}`
        });
      }
      else{
        this.setState({
          token,
          IsLoading:false
        });
      }
    })
  }
  // else{
  //
  // }
  // if (nv) {
  //
  //   this.setState({user: `Welcome  ${nv.username}`})
  // //  this.setState({isSignedIn: !!window.localStorage.getItem('jwt')});
  //  }

 }
  signout(){
    // alert('signout');
    const token = window.localStorage.getItem('jwt');

    if (token !== "undefined") {
      // nv = jwtDecode(token);
      // alert('2');
      fetch(SERVER_URL+"logout?token="+token)
      .then(res => res.json())
      .then(json => {
        if(json.success)
        {
          // this.setState({
          //   username:undefined,
          //   user: undefined
          // });
          localStorage.clear();
          window.location.hash = 'home';
          window.location.reload();
        }

      })
    }

    // this.props.history.push('/home');
  }
  // updateCity(city){
  //   this.setState({city:city});
  //
  //   // alert(this.state.city);
  // }
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-dark navbarbg" >

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active link">
              <Link to='/home' className="navbar-brand nav-margin">Home</Link>
            </li>
            {this.state.user ?
              <li className="nav-item active link mL10">
                <Link to='/myorders' className="navbar-brand nav-margin">My Orders</Link>
              </li>
              : null}
          </ul>
          <span className="navbar-text">
            <img style={{width: '30px', height: '30px'}} src="images/user.png" />
            {this.state.user ? this.state.user + '|' : null}

            {this.state.user ?
              <a href="#" onClick={this.signout} className="navbar-brand link nav-margin pL10 pR10">Logout</a>
              :
              <Link to='/login' className="navbar-brand link nav-margin pL10 pR10">Login</Link>}

          </span>
          <Link to='/signup' className="navbar-brand link nav-margin pL10 pR10">SignUp</Link>

        </div>

        </nav>

    );
  }
}
export default Nav;
