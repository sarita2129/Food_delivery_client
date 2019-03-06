import React, {Component} from 'react';
import $ from 'jquery';
let total = 0;
let index = 0;
const userid = window.localStorage.getItem('userid');
const SERVER_URL = "https://foodserverapp.herokuapp.com/api/";
// const SERVER_URL = "http://localhost:5000/api/";

export default class Home extends Component{
  constructor(){
    super();
    this.state = {
      // orderdetails:{},
      order:[],
      dishes:[],
      orderList:[]
  };
    const fetchOrderDetails = () => {
      fetch(SERVER_URL+"myorders?id="+userid)
      .then(res => res.json())
      .then(res => {
        var orderList = [res];
        var orderarray = [];
        var stateOrder = [];
        var statedishes = [];

        // console.log(orderList[0]);
        $.each(orderList[0],(key,value) => {
          orderarray.push(value);
          // console.log(orderarray);

          fetch(SERVER_URL+"orderdetails?id="+value)
          .then(res => res.json())
          .then(res =>
                      {
                        var resArray = [res];
                        // var stateOrder = [];
                        // console.log(resArray[0].name);
                        // this.setState({orderdetails:res});

                        $.each(resArray,(key,value) => {
                          // console.log(value);
                          var orderid="";
                          var cost=[];

                          $.each(value,(key1,value1) => {

                            if(key1 === "order"){
                              $.each(value1,(key2,value2) => {
                                orderid = value2._id;
                                cost=value2.cost;
                              var order = {
                                _id: value2._id,
                                cost:value2.cost,
                                order_no: value2.order_no,
                                deliverycost:value2.deliverycost,
                                deliveryaddress:value2.deliveryaddress,
                                name:resArray[0].name,
                                description:resArray[0].description,
                                Address:resArray[0].Address
                              }
                              stateOrder.push(order);
                              this.setState({ order: [...stateOrder] });
                            });
                          }
                          if(key1 === "dishes"){
                            $.each(value1,(key2,value2) => {
                              console.log(cost);

                            var dish = {
                              orderid:orderid,
                              _id: value2._id,
                              title:value2.title,
                              description: value2.description,
                              cost:cost[key2],
                            }
                            statedishes.push(dish);

                            this.setState({ dishes: [...statedishes] });
                          });
                          }
                          });
                        });
                        // console.log(stateOrder);
                      });
        });
        // console.log(stateOrder);

        this.setState({orderList:orderarray});

      });
      // fetch("http://localhost:5000/api/orderdetails?id=5c7e07be466c802fad42f028")
      // .then(res => res.json())
      // .then(res =>
      //             {
      //               var resArray = [res];
      //               var stateOrder = [];
      //               var statedishes = [];
      //
      //               this.setState({orderdetails:res});
      //               $.each(resArray,(key,value) => {
      //
      //                 $.each(value,(key1,value1) => {
      //                   if(key1 === "order"){
      //                     $.each(value1,(key2,value2) => {
      //
      //                     var order = {
      //                       _id: value2._id,
      //                       cost:value2.cost,
      //                       order_no: value2.order_no,
      //                       deliverycost:value2.deliverycost,
      //                       deliveryaddress:value2.deliveryaddress
      //                     }
      //                     stateOrder.push(order);
      //
      //                     this.setState({ order: [...stateOrder] });
      //
      //
      //                   });
      //                 }
      //                 if(key1 === "dishes"){
      //                   $.each(value1,(key2,value2) => {
      //                     console.log(value2)
      //
      //                   var dish = {
      //                     _id: value2._id,
      //                     title:value2.title,
      //                     description: value2.description,
      //                     cost:value2.cost,
      //                   }
      //                   statedishes.push(dish);
      //
      //                   this.setState({ dishes: [...statedishes] });
      //                 });
      //                 }
      //                 });
      //               });
      //             });
    };
    fetchOrderDetails();

  }

  render(){
    return(
      <div className="container">
      <div>
      {this.state.orderList.map( (list) => (

        <div>
        {this.state.order.map( (order) => (
          <div>
          <p className="var">{ total = 0 }</p>

          {list === order._id ?
            <div>
            <h3>{order.name}</h3>

              <h3>{order.description}</h3>
              <h3>{order.Address}</h3>

                <div className="row">
                  <p>Order No :{order.order_no}</p>

                </div>
                <div className="row">
                  <p>Delivery Address :{order.deliveryaddress}</p>
                </div>
                <div className="row">

                <div className="col-md-2">
                  <h3>Items:</h3>

                </div>
                <div className="col-md-2">
                  <h3>Cost:</h3>

                </div>
                </div>
                {this.state.dishes.map( (dish) => (
                  <div>
                  {list === dish.orderid ?
                  <div className="row">

                  <div className="col-md-2">

                    <p>{dish.title}</p>
                  </div>
                  <div className="col-md-2">

                    <p>{`$${dish.cost}`}</p>

                    <p className="var">{ total += dish.cost }</p>
                  </div>
                  </div>
                  : null }
                  </div>
                ))}
                <div className="row">
                    <div className="col-md-2">
                      <p>Delivery Charges</p>
                    </div>
                    <div className="col-md-2">
                      <p>{'$' + order.deliverycost}</p>
                    </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <p>Total Charges</p>
                  </div>
                  <div className="col-md-2">
                    <p>{'$' + (Number(order.deliverycost) + Number(total))}</p>
                  </div>
                </div>
                </div> : null}
          </div>

          ))}
        </div>
      ))}
      </div>

      </div>
    );
  }
}
