import React from "react";
import phoneCell from '../../../images/phone-call.png'
import emailIcon from'../../../images/mail.png';
import NavbarComp from '../../Header/NavBarComp'
import MapPin from '../../../images/pin.png'
import './styles.scss';


function ContactUs() {
   
  return (
    <>
    <div className="headerInner">
        <NavbarComp /> 
    </div>
    <div className="bodyWrapper width-100">
        <div className="container ">
            <div className="row contactWrapper">
                <div className="col-md-4 leftContect-box">
                    <div className="infoBox addressBox">
                        <img src={MapPin} alt="" />
                        <h3>Address</h3>
                        <p>Lorem Ipsum is simply dumy text please check</p>
                    </div>
                    <div className="infoBox addressBox">
                        <img src={emailIcon} alt="" />
                        <h3>Email</h3>
                        <p>info.citydream@gmail.com</p>
                    </div>
                    <div className="infoBox addressBox">
                        <img src={phoneCell} alt="" />
                        <h3>Phone</h3>
                        <p>+62 3456 45 4567</p>
                    </div>
                </div>
                <div className="col-md-8 rightContect-box">
                    <h2>Send us a message</h2>
                    <p>If you have any quires related to my citydreams, you can send me message from here. it's my pleasure to help you.</p>
                    <form>
                        <input type="text" placeholder="Enter Your Name" />
                        <input type="text" placeholder="Enter Your Email" />
                        <textarea placeholder="Enter Your Message"></textarea>
                        <button className="submtBtn">Send a message</button>
                    </form>
                </div>
            </div>
            </div>
       </div>
    </>
  );
}

export default ContactUs;
