import React from 'react';
import "./footer.css"
function FooterPage() {
  return (
    <div className=" Footer bg-dark ">
      <div className='container'>
       <div className='row'>
        <div className="col-md-6 col-lg-5 col-12 ft-1">
        <h3><span>ABOUT</span>COMPANY</h3>
        <p>Lorem ipsum dolor, sit amel consectetur adipisicing elit.Laborum ea quoi ex ullam laboriosam magani
          totam,facere eos iure voluptate.</p>
          <div className="footer-icons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
        <div className="col-md-6 col-lg-3  col-12 ft-2">
        <h5>Links</h5>
        <ul>
          <li className='nav-item'>
            <a className='' href="/">Home</a>
          </li>
          <li className='nav-item'>
            <a className='' href="/"></a>
          </li>


        </ul>
        </div>
        <div className="col-md-6 col-lg-4  col-12 ft-3">
        <h5>Contact Us</h5>
        <p><i className="fa-solid fa-phone"></i>+216 90452137</p>
        <p><i className="fa-solid fa-envelope"></i>user@gmail.com</p>
        <p><i className="fa-solid fa-paper-plane"></i>Tunisie,Tunis</p>




           </div>

       </div>
      </div>


    </div>
  );
}
export default FooterPage;