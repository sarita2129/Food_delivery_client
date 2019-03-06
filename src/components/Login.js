import React, {Component} from 'react';
import {browserHistory} from 'react-router';
// import jwtDecode from 'jwt-decode';
// import './Login.css'
const SERVER_URL = "https://foodserverapp.herokuapp.com/";

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {username: undefined, email: undefined,password:undefined, signUpError:'',SignInError:'',IsLoading:true}
    this._handleSubmit = this._handleSubmit.bind(this);
    // browserHistory.push('/home');
  }
  componentDidMount () {
  const token = window.localStorage.getItem('jwt');
  const username = window.localStorage.getItem('username');
  const email = window.localStorage.getItem('email');

  let nv;
  if (token !== "undefined") {
    // nv = jwtDecode(token);
    fetch(SERVER_URL+"verify?token="+token)
    .then(res => res.json)
    .then(json => {
      if(json.success)
      {
        this.setState({
          token,
          username:username
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
 _handleEmail = (e) => {
   e.preventDefault();
   this.setState({email: e.target.value});
 }
 _handlePassword = (e) => {
   e.preventDefault();
   this.setState({password: e.target.value});
 }
  _handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.inputNode1.value);
    // console.log(this.inputNode2.value);
    // var formData = new FormData();
    // formData.append("email",this.inputNode1.value);
    // formData.append("password",this.inputNode2.value);
    // console.log(formData);
    fetch("http://localhost:5000/api/login",
         { method: 'POST',
         body: JSON.stringify({
           email:this.state.email,
           password:this.state.password
         }),
         headers: {"Content-Type" : "application/json"}
       }).then(res => res.json()).then(res => {
                 console.log(res);
                //  const { user } = res.user;
                //  const{
                //   username,
                //   email,
                //   userid
                // } = user;
                //(


               // console.log(username);
               window.localStorage.setItem('jwt', res.token);
               window.localStorage.setItem('username', res.username);
               window.localStorage.setItem('email', res.email);//)
               window.localStorage.setItem('userid', res.userid);//)

               }

         // ).then(() => browserHistory.push('/home'))
       ).then(() => this.props.history.push('/home')
     ).then(() => window.location.reload())

        .catch(function(error) {
  console.log('There has been a problem with your fetch operation: ', error.message);
});
// console.log(this.props.history);

// let nv = jwtDecode(window.localStorage.getItem('jwt'));
//   this.setState({username: nv.username});
//     const {currentTarget} = event;
//   const formData = new FormData(currentTarget);
//   onSubmit({
//     email: formData.get('email'),
//     password: formData.get('password')
//   });
 }
  render(){
    return(
      <div className="wrapper fadeInDown">
        <div id="formContent">

          <div className="fadeIn first">
          </div>

          <form onSubmit={this._handleSubmit}>
            <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" ref={node => {this.inputNode1 = node}} onChange={this._handleEmail.bind(this)}/>
            <input type="password" id="password" className="fadeIn third passwordinput" name="login" placeholder="password" ref={node => {this.inputNode2 = node}} onChange={this._handlePassword.bind(this)}/>
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>

          <div id="formFooter">
            <a className="underlineHover" href="#">Forgot Password?</a>
          </div>
          {"Welcome, " + this.state.username}
        </div>
      </div>

    );
  }
}
export default Login;
