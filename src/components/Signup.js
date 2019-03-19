import React, {Component} from 'react';
import {browserHistory} from 'react-router';
// import jwtDecode from 'jwt-decode';
// import './Login.css'
const SERVER_URL = "https://foodserverapp.herokuapp.com/api/";
// const SERVER_URL = "http://localhost:5000/api/";

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
    fetch(SERVER_URL+"verify?token="+token)
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
    fetch(SERVER_URL+"user",
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
           fetch(SERVER_URL+"login",
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
      <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
        <div id="formContent">
          <form onSubmit={this._handleSubmit}>
            <div class="form-group">
              FirstName
              <input type="text" id="firstName" className="form-control txt" name="firstName" placeholder="First name" ref={node => {this.inputNode1 = node}} />
            </div>
            <div class="form-group">
              LastName
              <input type="text" id="lastName" className="form-control txt" name="lastName" placeholder="Last name" ref={node => {this.inputNode2 = node}} />
            </div>
            <div class="form-group">
              Email
              <input type="text" id="login" className="form-control txt" name="email" placeholder="Email" ref={node => {this.inputNode3 = node}} />
            </div>
            <div class="form-group">
              Password
              <input type="password" id="password" className="form-control txt" name="password" placeholder="password" ref={node => {this.inputNode4 = node}} />
            </div>
            <input type="submit" className="btn btn-primary" value="Log In" />
          </form>

        </div>
        </div>
      </div>

      </div>

    );
  }
}
export default Signup;
