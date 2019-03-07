import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import RestaurantInfo from './RestaurantInfo';
import MessageList from './MessageList';
const SERVER_URL = "https://foodserverapp.herokuapp.com/api/";
// const SERVER_URL = "http://localhost:5000/api/";

export default class Home extends Component{
  constructor(){
    super();
    this.state = {
      restaurant:[],
      toggle:"expand"
    };

    const fetchRestaurants = () => {
      // alert('1');
      fetch(SERVER_URL+"restaurants")
      .then(res => res.json())
      .then(res =>
                  {
                    // console.log(res);
                    // debugger;
                    // console.log(this.state.restaurant[0]['5c79fa35a040bec87734ac8f']._id);
                    var resArray = [res];
                    var stateArray = [];
                    // for (var i = 0; i < carsArray.length; i++){
                    //     var car = carsArray[i];
                    //     console.log(car)
                    // }
                    $.each(resArray,(key,value) => {
                      // console.log(key);
                      $.each(value,(key1,value1) => {
                        stateArray.push(value1);
                      });
                    });
                    this.setState({ restaurant: [...stateArray] });
                    // this.setState({ restaurant: [res] });

                    // console.log(stateArray);
                 });
    };
    fetchRestaurants();
    // console.log(this.state.restaurant);
  }
  componentDidMount(){
    $('.innerdiv').slideToggle('slow');
  }
  toggle(){
        $('.innerdiv').slideToggle('slow');
        this.setState({toggle:this.state.toggle === "expand" ? "collapse" : "expand"});
  }
  render(){
    return(
      <div>
      <div className="banner">
        <div className="overlay">
        </div>
      </div>
      <div className="container">
        <div className="md-offset-2">
           { this.state.restaurant.map( (restaurant) => (

           <div key={restaurant._id + 'moviediv'} className="row d-inline-block">
           <div className="col-md-4">
           <Link to={"/restaurantinfo/"+restaurant._id.toString() } className="btn btn-light">
           <div key={restaurant._id} className="moviediv" >
            <img src={ restaurant.image} alt={restaurant.name} className="movieimg" key={'img' + restaurant._id}/>
            <h5>{restaurant.name}</h5>
            </div>
            </Link>
            </div>
            </div>
          ))}
          </div>


      </div>
      <div className="screen">
        <button className="screen botclose" onClick={this.toggle.bind(this)}>{this.state.toggle}</button>
       <div className="innerdiv">
          <iframe
              allow="microphone;"
              width="350"
              height="430"
              src="https://console.dialogflow.com/api-client/demo/embedded/18e5fe74-c8b1-455c-b697-e3be6743a7ca">
          </iframe>
        </div>
      </div>
      </div>
    );
  }
}
