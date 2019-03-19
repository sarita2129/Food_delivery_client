import React, { Component } from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

export default class Footer extends Component{
  render(){
    return(
      <footer className="footer-distributed" id="footer">

			<div className="footer-left">

				<h3 className="logo">Foodie</h3>

				<p className="footer-links">
					<Link to='/home' >Home</Link>
					·
					<a href="#">About</a>
					·
					<a href="#">Contact</a>
				</p>

				<p className="footer-company-name">Foodie &copy; 2015</p>
			</div>

			<div className="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>21 Revolution Street</span> Paris, France</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+1 555 123456</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
          Established since 2008, we take most care to deliver happiness at your door steps.
				</p>

				<div className="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
    );
  }
}
