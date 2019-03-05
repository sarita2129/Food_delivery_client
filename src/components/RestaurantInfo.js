import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';
let dishCategory = [];
const userid = window.localStorage.getItem('userid');

export default class RestaurantInfo extends Component{
  constructor(props){
    super(props);
    this.state = {
      restaurant:[],
      dishCategory:[],
      order:[],
      total:0,
      deliverycharges:5,
      params:[],
      message:''
    }
    var resArray = [this.props.match.params.restaurant];
    const fetchRestaurantDetails = () => {
      // alert('1');
      fetch("http://localhost:5000/api/restaurant?id="+this.props.match.params.restaurant)
      .then(res => res.json())
      .then(res =>
                  {
                    // console.log(res);
                    // debugger;
                    // console.log(this.state.restaurant[0]['5c79fa35a040bec87734ac8f']._id);
                    var resArray = [res];
                    var stateArray = [];
                    // this.setState({ restaurant: [...res] });

                    $.each(resArray,(key,value) => {

                      $.each(value,(key1,value1) => {

                        stateArray.push(value1);
                      });
                    });
                    this.setState({ restaurant: [...stateArray] });
                    // console.log(stateArray);
                    // console.log(this.state.restaurant);
                      this.state.restaurant.map( (restaurant) =>
                        {
                          dishCategory = restaurant.Dishes.map(item => item.type)
                          .filter((value, index, self) => self.indexOf(value) === index)
                        }

                      );
                      this.setState({dishCategory:dishCategory});
                      // console.log(dishCategory);
                      // dishCategory.map((type) =>(
                      //   console.log(type)
                      // ))
                      // const dishCategory = res.Dishes.map(item => item.type)
                      // .filter((value, index, self) => self.indexOf(value) === index)
//.filter(item => item.type === type)

                 });
                 // });
    };
    fetchRestaurantDetails();
    // console.log([...resArray]);
  }
  componentDidMount () {
    // alert('1');
  // const token = window.localStorage.getItem('jwt');
  // const username = window.localStorage.getItem('username');
  // const email = window.localStorage.getItem('email');

  // let nv;
  // if (token !== "undefined") {
  //   // nv = jwtDecode(token);
  //   // alert('2');
  //   fetch("http://localhost:5000/api/verify?token="+token)
  //   .then(res => res.json())
  //   .then(json => {
  //     if(json.success)
  //     {
  //       this.setState({
  //         token,
  //         username:username,
  //         user: `Welcome ,${username}`
  //       });
  //     }
  //     else{
  //       this.setState({
  //         token,
  //         IsLoading:false
  //       });
  //     }
  //   })
  // }
}

  addToCart(dish){
    // alert('1');
    // e.preventDefault();
    console.log(this.state.order.dishid);
    let order = {
      userid:userid,
      dishid:dish._id,
      cost:dish.cost,
      title:dish.title
    }
    // toQueryString(order, "prefix");
    this.setState({order:[...this.state.order, order]});
    this.setState({total: this.state.total+dish.cost});
    // this.setState({params:toQueryString(this.state.order)});

    console.log(this.state.order);
    // console.log(this.state.params);

  }
  confirmOrder(){
    // let axiosArray = [];
    // alert(this.state.order[j].dishId);
    let dishArray = [];
    let dishCost = [];

    // let postData = {}
    // postData['order_no'] = Math.random().toString(36).slice(2).toUpperCase() + Math.round(Math.random(1000) * 10000);
    // postData['userId'] = userid;
    // postData['deliverycost'] = this.state.deliverycost;
    // postData['deliveryaddress'] = this.inputNode1.value;
    for (let j=0;j<=this.state.order.length-1;j++) {
      // var dish = {
      //   "dishes" : this.state.order[j].cost
      // };
      dishArray[j] = this.state.order[j].dishid;
      dishCost[j] = this.state.order[j].cost;
      // postData['cost'] = this.state.order[j].cost;
    }
    fetch("http://localhost:5000/api/order",
         { method: 'POST',
         body: JSON.stringify({
           order_no:Math.random().toString(36).slice(2).toUpperCase() + Math.round(Math.random(1000) * 10000),
           userId:userid,
           restaurant_id:this.props.match.params.restaurant,
           dishId:dishArray,
           cost:dishCost,
           deliverycost:this.state.deliverycharges,
           deliveryaddress:this.inputNode1.value,
         }),
         headers: {"Content-Type" : "application/json"}
       }).then(res => res.json()).then(res => {
               if(res.success)
               {
                 console.log(res);
               }

               });
    // let newPromise = axios({
    //     method: 'post',
    //     url: "http://localhost:5000/api/order",
    //     data: postData,
    //     headers: {"Content-Type" : "application/json"}
    //   })
    // axiosArray.push(newPromise)
    // // console.log(axiosArray);
    // axios
    // .all(axiosArray)
    // .then(() => {
    //   this.setState({message: "Order placed Succesfully."})
    // // console.log('submitted all axios calls')
    // }).catch(error => {this.setState({message: error.message})})

  }
  render(){
    return(
      <div className="container">{ this.state.restaurant.map( (restaurant) => (
          <div className="row mT10 mB10">
            <div key={restaurant._id + 'moviediv'} className="row d-inline-block col-md-8">
                 <h1>{restaurant.name}</h1>
                 <p>{restaurant.description}</p>
                 <p>{restaurant.Address + restaurant.city}</p>

                 <div className="col-md-4">



                 </div>
                 {this.state.dishCategory.map((type) =>(
                   <div className="dishesdiv" key ={type}>
                    <h2>{type}</h2>
                    {
                      restaurant.Dishes.filter(item => item.type === type).map((dish) => (
                        <div>
                          <div key={dish._id}>
                             <h3>{dish.title}</h3>
                             <p>{dish.description}</p>
                             <p>{dish.cost + '$'}</p>
                          </div>
                          <button onClick={() => this.addToCart(dish)}>Add</button>
                        </div>
                      ))
                    }
                  </div>

                 ))}
            </div>
            <div className="col-md-4">
              <div className="row">
                { this.state.restaurant.map( (restaurant) => (<div key={restaurant._id}>
                   <img src={ restaurant.image} alt={restaurant.name} className="movieimg" key={'img' + restaurant._id}/>
                </div>))}
              </div>
            {
              (this.state.order.length > 0) ?

              <div>
                <h3>Order Details</h3>
                <table>
                <tr>
                <th>List</th>
                <th>Cost</th>
                </tr>

                {this.state.order.map( (order) => (

                    <tr>
                    <td>{order.title}</td>
                    <td>{order.cost}</td>
                    </tr>
                ))}
                <tr>
                <td>Delivery Charges</td>
                <td>{this.state.deliverycharges + '$'}</td>
                </tr>
                <tr>
                <td>Total</td>
                <td>{(this.state.total + this.state.deliverycharges) + '$'}</td>
                </tr>
                </table>
                  <form onSubmit={this.confirmOrder.bind(this)}>
                  <label>Enter Delivery Address</label>
                  <input type="textarea" placeholder="Address" ref={node => {this.inputNode1 = node}}/>
                  <button>Confirm</button>
                  <p>{this.state.message}</p>
                  </form>
                </div>
              :

              null

              }



            </div>
          </div>
     ))}</div>
    );
  }
}
