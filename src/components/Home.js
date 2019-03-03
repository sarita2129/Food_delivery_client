import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import RestaurantInfo from './RestaurantInfo';

export default class Home extends Component{
  constructor(){
    super();
    this.state = {
      restaurant:[]
    };
    const fetchRestaurants = () => {
      // alert('1');
      fetch("http://localhost:5000/api/restaurants")
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
  render(){
    return(
      <div className="container">
           { this.state.restaurant.map( (restaurant) => (

           <div key={restaurant._id + 'moviediv'} className="row d-inline-block">
           <div className="col-md-4">
           <Link to={"/restaurantinfo/"+restaurant._id.toString() } className="btn btn-light">
           <div key={restaurant._id} className="moviediv">
            <img src={ restaurant.image} alt={restaurant.name} className="movieimg" key={'img' + restaurant._id}/>
            </div>
            </Link>
            </div>
            </div>
          ))}
      </div>
    );
  }
}
