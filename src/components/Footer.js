import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component{
  render(){
    return(
      <div>
      <footer class="container-fluid bg-grey py-5">
  <div class="container">
     <div class="row">
        <div class="col-md-6">
           <div class="row">
              <div class="col-md-6 ">
                 <div class="logo-part">
                    <img style={{width: '200px', height: '100px'}} src="images/logo.png"/>
                 </div>
              </div>
              <div class="col-md-6 px-4">
                 <a href="#" class="btn-footer"> More Info </a>
                 <a href="#" class="btn-footer"> Contact Us</a>
              </div>
           </div>
        </div>
        <div class="col-md-6">
           <div class="row">
              <div class="col-md-6 px-4">
                 <div class="row ">
                    <div class="col-md-6">
                       <ul>
                          <li> <a href="#"> Home</a> </li>
                          <li> <a href="#"> About</a> </li>
                          <li> <a href="#"> Careers</a> </li>
                          <li> <a href="#"> Policy</a> </li>
                          <li> <a href="#"> Refunds</a> </li>
                          <li> <a href="#"> Help</a> </li>
                          <li> <a href="#"> Contact</a> </li>
                       </ul>
                    </div>

                 </div>
              </div>
              <div class="col-md-6 ">
                 <h6> Newsletter</h6>
                 <div class="social">
                    <a href="#"><img style={{width: '50px', height: '50px'}} src="images/facebook.png" /></a>
                    <a href="#"><img style={{width: '40px', height: '40px'}} src="images/instagram.png" /></a>
                    <a href="#"><img style={{width: '40px', height: '40px'}} src="images/googleplus.png" /></a>
                    <a href="#"><img style={{width: '40px', height: '40px'}} src="images/twitter.png" /></a>

                 </div>
                 <form class="form-footer my-3">
                    <input type="text"  placeholder="search here...." name="search" />
                    <input type="button" value="Go" />
                 </form>
                 <p>Copyrights Reelsplex 2019</p>
              </div>
           </div>
        </div>
     </div>
  </div>
  </footer>
      </div>
    );
  }
}
export default Footer;
