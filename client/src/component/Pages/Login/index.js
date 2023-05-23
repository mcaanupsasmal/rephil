import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavbarComp from '../../Header/NavBarComp'
import './styles.scss';
import Footer from "../../molecules/footer";


function Login() {
    const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  // handleChange
  const handleNameChange = e => {
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
                <h1>Login</h1>
                <Form>
                  <Row className="formContainer row">
                    <Col xs={12} md={8} className='formInput'>
                      <input
                        name="Name"
                        type="name"
                        className="form-control"
                        placeholder="User ID"
                        onChange={handleNameChange}
                        value={Email}
                      />
                    </Col>
                    <Col xs={12} md={8} className='formInput passowrdInput'>
                      <input
                        name="Password"
                        placeholder="Passowrd"
                        type="password"
                        className="form-control"
                        onChange={handlePasswordChange}
                        value={Password}
                      />
                    </Col>
                  </Row>
                  <div className="d-grid gap-2">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                  <p className="text-center mt-5" mt='2'>New to RealState? <a href="#" style={{color: '#21536f'}}>Sign Up</a></p>
                </Form>
            </div>
        </div>
    </div>
    <Footer />
    </>
  );
}

export default Login;
