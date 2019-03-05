import React, {Component} from 'react';

const Dummy_DATA = [
  {
    text: "Hello",
    sender: "Jeol"
  },
  {
    text: "How may I help you?",
    sender: "Jeol"
  },
  {
    text: "Have a nice day.",
    sender: "Jeol"
  }
];
export default class MessageList extends Component{
  constructor(){
    super();
    this.state = {
      sender: Math.random().toString(36).slice(2).toUpperCase() + Math.random(1000) * 1000,
      message: ""
    }
  }
  _handleSubmit(msg){
    var data = {
      text: msg,
      sender: this.state.sender
    }
    Dummy_DATA.push(data);
    console.log(Dummy_DATA);
  }
  _handleChange(e){
    this.setState({message: e.target.value});
  }
  render(){
    return(
      <div className="shadows">
      {Dummy_DATA.map((message) => {
        return(
              <div className="">
                <h5>{message.sender}</h5>
                <p>{message.text}</p>
              </div>
            );
      })}
      <form onSubmit={() => this._handleSubmit(this.state.message)}>
        <input type="text" placeholder="Type your message here" onChange={this._handleChange.bind(this)}/>
      </form>
      </div>
    );
  }
}
