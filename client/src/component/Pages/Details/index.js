import React from "react";
import phoneCell from '../../../images/phone-call.png'
import emailIcon from'../../../images/email.png';
import NavbarComp from '../../Header/NavBarComp'
import checkIcon from '../../../images/checkIcon.png'
import './styles.scss';


function Details() {
   
  return (
    <>
    <div className="headerInner">
        <NavbarComp /> 
    </div>
    <div className="bodyWrapper width-100">
        <div className="container categoryWraper">
            <div className="detailsContainer">
                <div className="col-md-9 floatLeft">
                    {/* <div className="propertyDetails_wrap width-100">
                        <h1>Details Title Head</h1>
                        <p className="propDetls_title">Lorem ipsums is simly dumy text</p>
                    </div> */}
                    <div className="propertyDetails_content width-100">
                    <div className="leftDetails">
                        <h3>Contact Listing Agent</h3>
                        <p className="typeTitle">Field Gate Property</p>
                        <div className="infoAgent width-100">
                            <p>Metro Manila City</p>
                            <a href="tel:2345678905"><span><img src={phoneCell} alt="phone" /></span>1232 43566 77</a>
                            <a href="mailto:info@gmail.com"><span><img src={emailIcon} alt="email" /></span>info@gmail.com</a>
                        </div>
                        <form>
                            <input type="text" placeholder="Name" /> 
                            <input type="email" placeholder="Email" /> 
                            <input type="email" placeholder="Phone Number" /> 
                            <input type="email" placeholder="Address" /> 
                            <textarea placeholder="Message"></textarea>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                    <div className="rightContent_property">
                        <h3>Property Description</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                        <div className="prop_Features width-100">
                            <h4>Property Features:-</h4>
                            <p><img src={checkIcon} alt="" />Balcony</p>
                            <p><img src={checkIcon} alt="" />Children Park</p>
                            <p><img src={checkIcon} alt="" />Attick</p>
                        </div>
                        <div className="rightContentProperty rightContentProperty_details width-100">
                            <div className="rightFeatures">
                                <h4>Property Details:-</h4>
                                <ul>
                                    <li>
                                        <label>Type:<span>Family Home</span></label>
                                    </li>
                                    <li>
                                        <label>Status:<span>Rent</span></label>
                                    </li>
                                    <li>
                                        <label>Location:<span>Family Home</span></label>  
                                    </li>
                                    <li>
                                        <label>Sub Location:<span>Family Home</span></label>
                                    </li>
                                    <li>
                                        <label>Price:<span>Family Home</span></label>
                                    </li>
                                    <li>
                                        <label>Area:<span>Family Home</span></label>
                                    </li>
                                    <li>
                                        <label>Bedroom:<span>Family Home</span></label>
                                    </li>
                                    <li>
                                        <label>Bathroom:<span>Family Home</span></label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-md-3 leftlistItem floatLeft">
                    <div className="leftlistItemBox">
                        <form>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                        Property Type
                                    </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="form-group checkCustom">
                                            <input type="checkbox" id="commercial" />
                                            <label for="commercial">Commercial</label>
                                        </div>
                                        <div className="form-group checkCustom">
                                            <input type="checkbox" id="land" />
                                            <label for="land">Land</label>
                                        </div>
                                        <div className="form-group checkCustom">
                                            <input type="checkbox" id="house" />
                                            <label for="house">House</label>
                                        </div>
                                        <div className="form-group checkCustom">
                                            <input type="checkbox" id="apartment" />
                                            <label for="apartment">Apartment</label>
                                        </div>
                                        <div className="form-group checkCustom">
                                            <input type="checkbox" id="condominium" />
                                            <label for="condominium">Condominium</label>
                                        </div>
                                        <p className="note">You cannot select more than three</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                        Province
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="form-group checkCustom">
                                            <input type="checkbox" id="manila" />
                                            <label for="manila">Metro Manila</label>
                                        </div>
                                        <div className="form-group checkCustom">
                                            <input type="checkbox" id="makati" />
                                            <label for="makati">Makati City</label>
                                        </div>
                                        <div className="form-group checkCustom">
                                            <input type="checkbox" id="calacoon" />
                                            <label for="calacoon">Calacoon City</label>
                                        </div>
                                        <div className="form-group checkCustom">
                                            <input type="checkbox" id="basmnet" />
                                            <label for="basmnet">Basmnet City</label>
                                        </div>
                                        <p className="note">You cannot select more than three</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                        City/Muncipality
                                    </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="form-group checkCustom">
                                            <input type="checkbox" id="laspinas" />
                                            <label for="laspinas">Laspinas</label>
                                        </div>
                                        <div className="form-group checkCustom">
                                            <input type="checkbox" id="passay" />
                                            <label for="passay">Passay</label>
                                        </div>
                                        <div className="form-group checkCustom">
                                            <input type="checkbox" id="malaboon" />
                                            <label for="malaboon">Malaboon</label>
                                        </div>
                                        <div className="form-group checkCustom">
                                            <input type="checkbox" id="makaya" />
                                            <label for="makaya">Makaya</label>
                                        </div>
                                        <div className="form-group checkCustom">
                                            <input type="checkbox" id="quezon" />
                                            <label for="quezon">Quezon</label>
                                        </div>
                                        <p className="note">You cannot select more than three</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#barnagay">
                                        Barangay
                                    </button>
                                    </h2>
                                    <div id="barnagay" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="form-group checkCustom">
                                            <input type="checkbox" id="barangay1" />
                                            <label for="barangay1">Barangay 1</label>
                                        </div>
                                        <div className="form-group checkCustom">
                                            <input type="checkbox" id="barangay2" />
                                            <label for="barangay2">Barangay 2</label>
                                        </div>
                                        <div className="form-group checkCustom">
                                            <input type="checkbox" id="barangay3" />
                                            <label for="barangay3">Barangay 3</label>
                                        </div>
                                        <div className="form-group checkCustom">
                                            <input type="checkbox" id="barangay4" />
                                            <label for="barangay4">Barangay 4</label>
                                        </div>
                                        <div className="form-group checkCustom">
                                            <input type="checkbox" id="barangay5" />
                                            <label for="barangay5">Barangay 5</label>
                                        </div>
                                        <p className="note">You cannot select more than three</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="priceRange">
                                <h2>Price</h2>
                            </div>
                            <button className="searchProperty">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </>
  );
}

export default Details;
