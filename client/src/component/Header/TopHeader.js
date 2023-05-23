import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown";
import logo from'../../images/logo.png';
import "./styles.css";


export default function TopHeader() {

  return (
    <div className="menuNavTop">
      <div className="container">
        <div className="menu-container">
          <div className="navLogo"><img  src={logo} alt="lessor"/></div>
          <div className="container-flex">
            <Dropdown>
              <Dropdown.Toggle variant="link">
                Prime Member <FaAngleDown />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                      Login
                    </Button>
                </div>
                <p>Are You Prime Member <a href="#">Sign Up</a></p>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="link">
                Login <FaAngleDown />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                      Login
                    </Button>
                </div>
                <p>Are You New Member <a href="#">Sign Up</a></p>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}

