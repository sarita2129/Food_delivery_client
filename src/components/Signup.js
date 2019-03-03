import React, {Component} from 'react';
import {browserHistory} from 'react-router';
// import jwtDecode from 'jwt-decode';
// import './Login.css'

class Signup extends Component{
  constructor(props){
    super(props);
    this.state = {username: undefined, email: undefined,password:undefined, signUpError:'',SignInError:'',IsLoading:true}
    this._handleSubmit = this._handleSubmit.bind(this);
    // browserHistory.push('/home');
  }
  componentDidMount () {
  const token = window.localStorage.getItem('jwt');
  let nv;
  if (token !== "undefined") {
    // nv = jwtDecode(token);
    fetch("https://localhost:5000/api/verify?token="+token)
    .then(res => res.json)
    .then(json => {
      if(json.success)
      {
        this.setState({
          token,
          IsLoading:false
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
  else{

  }
  if (nv) {

    this.setState({user: `Welcome  ${nv.username}`})
  //  this.setState({isSignedIn: !!window.localStorage.getItem('jwt')});
   }

 }
 // _handleEmail = (e) => {
 //   e.preventDefault();
 //   this.setState({email: e.target.value});
 // }
 // _handlePassword = (e) => {
 //   e.preventDefault();
 //   this.setState({password: e.target.value});
 // }
  _handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.inputNode1.value);
    // console.log(this.inputNode2.value);
    // var formData = new FormData();
    // formData.append("email",this.inputNode1.value);
    // formData.append("password",this.inputNode2.value);
    // console.log(formData);
    fetch("http://localhost:5000/api/user",
         { method: 'POST',
         body: JSON.stringify({
           firstname:this.inputNode1.value,
           lastname:this.inputNode2.value,
           email:this.inputNode3.value,
           password:this.inputNode4.value
         }),
         headers: {"Content-Type" : "application/json"}
       }).then(res => res.json())
       .then(res => {
         if(res.success){
           console.log('signed up');
           fetch("http://localhost:5000/api/login",
                { method: 'POST',
                body: JSON.stringify({
                  email:this.inputNode3.value,
                  password:this.inputNode4.value
                }),
                headers: {"Content-Type" : "application/json"}
              }).then(res => res.json()).then(res => (console.log(res),
                  this.setState({username: this.inputNode1.value}),
                  window.localStorage.setItem('jwt', res.token))
                // ).then(() => browserHistory.push('/home'))
              )
         }
       })
       // ,
       //     this.setState({username: this.inputNode1.value}),
       //     window.localStorage.setItem('jwt', res.token))
       //   // ).then(() => browserHistory.push('/home'))
       // )//.then(() => this.props.history.push('/home')
     //)//.then(() => window.location.reload())

       // )
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
            <label>FirstName</label>
            <input type="text" id="firstName" className="fadeIn second" name="firstName" placeholder="First name" ref={node => {this.inputNode1 = node}} />
            <label>LastName</label>
            <input type="text" id="lastName" className="fadeIn second" name="lastName" placeholder="Last name" ref={node => {this.inputNode2 = node}} />
            <label>Email</label>
            <input type="text" id="login" className="fadeIn second" name="email" placeholder="Email" ref={node => {this.inputNode3 = node}} />
            <label>Password</label>
            <input type="password" id="password" className="fadeIn third passwordinput" name="password" placeholder="password" ref={node => {this.inputNode4 = node}} />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>

          <div id="formFooter">
            <a className="underlineHover" href="#">Forgot Password?</a>
          </div>

        </div>
      </div>

    );
  }
}
export default Signup;
