import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Form';
import { IoIosEye } from "@react-icons/all-files/io/IoIosEye";
import { IoIosEyeOff } from "@react-icons/all-files/io/IoIosEyeOff";
import Col from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavbarComp from '../../Header/NavBarComp'
import './styles.scss';


function Signup() {
    const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);

  // handleChange
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  // handleChange
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  return (
    <>
    <div className="headerInner">
        <NavbarComp /> 
    </div>
    <div className="overlayCitySignup width-100">
      <div className="signUpText col-md-6 col-sm-12">
          <div class="SingListContent width-100">
              <h1>Thing you Can Do with<br/>RealCity Account</h1>
              <ul>
                <li>Post on Signle Property Free</li>
                <li>Set property alerts for your requirement</li>
                <li>Showcase your property as Rental, PG or for Sale</li>
                <li>Performance in search &amp; Track responses &amp; views online</li>
                <li>Add detailed property information &amp; multiple photos per listing</li>
              </ul>
          </div>
      </div>
        <div className="signUpCol col-md-6 col-sm-12">
            <div class="UserForm width-100">
                <h1>Signup</h1>
                <Form>
                  {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3 radioCheck">
                      <Form.Check
                        inline
                        label="Lessee"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="Lessor/Owner"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                  <Row className="formContainer">
                    <Col xs={12} md={8} className='formInput'>
                      <input
                        name="Name"
                        type="name"
                        className="form-control"
                        placeholder="Name"
                        onChange={handleEmailChange}
                        value={Email}
                      />
                    </Col>
                    <Col xs={12} md={8} className='formInput'>
                      <input
                        name="Email"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={handleEmailChange}
                        value={Email}
                      />
                       <span className="errorText">Please Type Correct Email</span>
                    </Col>
                    <Col xs={12} md={8} className='formInput passowrdInput'>
                      <span
                        style={{ cursor: "pointer", position: 'absolute', top: 5, right: 10 }}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <IoIosEye fontSize={24} color='grey' /> : <IoIosEyeOff fontSize={24} color='grey' />}
                      </span>
                      <input
                        name="Password"
                        placeholder="Passowrd"
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        onChange={handlePasswordChange}
                        value={Password}
                      />
                    </Col>
                    <Col xs={12} md={8} className='formInput'>
                      <input
                        name="Number"
                        type="number"
                        className="form-control"
                        placeholder="Mobile Number"
                        onChange={handleEmailChange}
                        value={Email}
                      />
                    </Col>
                    <Col xs={8} md={6} className='formInput checkForms'>
                      <input
                        style={{ marginRight: "2px" }}
                        type="checkbox"
                        value=""
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                      />
                      <span style={{ marginRight: "10px", fontSize: '14px' }}>I Agree to</span>
                      <a
                        style={{color: '#21536f'}}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://google.com"
                      >
                        <span>Terms and Conditions</span>
                      </a> &amp;&nbsp;
                      <a style={{color: '#21536f'}}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://google.com"
                      >
                        <span>Privacy Policy</span>
                      </a>
                    </Col>
                  </Row>
                  <div className="d-grid gap-2">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
            </div>
        </div>
    </div>
    </>
  );
}

export default Signup;
