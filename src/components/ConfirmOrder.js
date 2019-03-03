import React, {Component} from 'react';

export default class ConfirmOrder extends Component{
  render(){
    return(
      <div>Order Confirmation{this.props.match.params.order}</div>
    );
  }
}
