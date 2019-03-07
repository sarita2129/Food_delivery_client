import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';
let dishCategory = [];
const userid = window.localStorage.getItem('userid');
const SERVER_URL = "https://foodserverapp.herokuapp.com/api/";
// const SERVER_URL = "http://localhost:5000/api/";

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
      message:'',
      success:false
    }
    var resArray = [this.props.match.params.restaurant];
    const fetchRestaurantDetails = () => {
      // alert('1');
      fetch(SERVER_URL+"restaurant?id="+this.props.match.params.restaurant)
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
    console.log(this.state.restaurant[0])


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
    fetch(SERVER_URL+"order",
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
                 this.setState({success: true});
                 this.setState({order: res.order});
                 var order = [res.order];
                 var resdishId = [];
                 var rescost = [];
                 var order_no = "";
                 var deliverycost = 0;
                 var deliveryaddress = "";

                 $.each(order,(key,value) => {

                   $.each(value,(key1,value1) => {
                   //
                   order_no = value1.order_no;
                   deliverycost = value1.deliverycost;
                   deliveryaddress = value1.deliveryaddress;

                    rescost = [value1.cost];
                    resdishId = [value1.dishId];

                   //   // stateArray.push(value1);
                   });
                 });
                 this.setState({message: "Order placed Succesfully.Your order# is "+order_no});

                 console.log(resdishId);

                var dishes = [];
                this.state.restaurant.map( (restaurant) =>
                  {

                    dishes = restaurant.Dishes.filter(function(restaurant) {
                     return resdishId.some(function(t){
                       // console.log(t);
                       // console.log(restaurant._id);

                       return String(restaurant._id) === String(t);
                     });
                   });

                  });
                  console.log(dishes);
                  var dishArray = [];
                  var total = 0;

                  for(let i=0;i<=dishes.length-1;i++){
                    total = total + Number(rescost[i]);

                    var dish = {
                      _id:dishes[i]._id,
                      title:dishes[i].title,
                      cost:rescost[i]
                    };

                    dishArray.push(dish);
                  }
                  this.setState({order:[...dishArray]});
                  this.setState({deliverycharges:deliverycost});
                  this.setState({deliveryaddress:deliveryaddress});
                  this.setState({total: total});

                 console.log(total);
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
                 <div className="restaurantdiv">
                 <p className="ptag">{restaurant.description}</p>
                 <p className="ptag">{restaurant.Address + restaurant.city}</p>
                 </div>

                 {this.state.dishCategory.map((type) =>(
                   <div className="dishesdiv mB10" key ={type}>
                    <h3>{type}</h3>
                    {
                      restaurant.Dishes.filter(item => item.type === type).map((dish) => (
                        <div className="row md-offset-1">
                          <div key={dish._id} className="col-md-8">
                             <h5>{dish.title}</h5>
                             <p>{dish.description}</p>
                             <p>{dish.cost + '$'}</p>
                          </div>
                          <div key={dish._id} className="col-md-2">

                          <button className="btn btn-primary" onClick={() => this.addToCart(dish)}>Add</button>
                          </div>
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
                    <td>{order.cost + '$'}</td>
                    </tr>
                ))}
                <tr>
                <td>Delivery Charges</td>
                <td>{this.state.deliverycharges + '$'}</td>
                </tr>
                <tr>
                <td>Total</td>
                <td>{(this.state.total + Number(this.state.deliverycharges)) + '$'}</td>
                </tr>
                </table>
                  <form onSubmit={this.confirmOrder.bind(this)}>
                  <label>Enter Delivery Address</label>
                  {this.state.success === true ? <p>{this.state.deliveryaddress}</p> :
                  <input type="textarea" placeholder="Address" className="form-control txtarea" ref={node => {this.inputNode1 = node}}/>
                   }
                  <button className="btn btn-primary mT10">Confirm</button>
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
