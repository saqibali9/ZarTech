import React from "react";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';


const Login = ({handleChange}) => {

    const [first, setState4] = useState(false);
    const handleButtonClick = () => {
      setState4(!first);
    };
  
    const [second, setState1] = useState(false);
    const handleButtonClick2 = () => {
      setState1(!second);
    };
  
    const [third, setState2] = useState(false);
    const handleButtonClick3 = () => {
      setState2(!third);
    };

    return (
        
        <div className="form_fild login_form">
        {third ? (
          <div class="forgot_popup">
            <div class="forgot_popup_content">
              <h2 class="forgot_popup_title">
                Forgot Password
              </h2>
              <p class="forgot_popup_body text-justify">
                {" "}
                Lost your password? Please enter Registered
                Mobile Number. You will receive your password.
              </p>
            </div>
            <div class="input-group mb-4">
              <div class="input-group-prepend country_code">
                <span class="input-group-text">+91</span>
              </div>
              <input
                type="number"
                class="form-control mobile_no"
                placeholder="Enter Mobile Number..."
                aria-label="Mobile Number"
                aria-describedby="basic-addon1.3"
                required
              />
            </div>
            <button
              className="btn otp_btn text-center"
              type="submit"
            >
              Reset Password
            </button>
            <p className="text-center">or</p>
            <div className="use_email_login">
              <a
                className="use_mail_btn  mt-4 font-weight-bold"
                type="button"
                onClick={() => handleButtonClick3()}
              >
                Use Email to LogIN
              </a>
            </div>
          </div>
        ) : (
          <div className="login_main_content">
            {first ? (
              <div className="mobile_otp my-4">
                {second ? (
                  <div className="login_otp my-3">
                    <h4 className="mx-2">Mobile Number</h4>
                    <p className="Entered_mobile_no mx-3">
                      +91 - <span>9876543210</span>{" "}
                      <i
                        class="fas fa-pencil-alt ml-3"
                        onClick={() => handleButtonClick2()}
                      ></i>
                    </p>

                    <div className="enter_otp">
                      <div className="input_group">
                        <input
                          type="number"
                          className="input"
                          placeholder="Enter OTP sent on Your Mobile No."
                        />
                      </div>
                      <small className="ml-3">
                        {" "}
                        Your OTP valid for 5min...
                      </small>

                      <p className="mt-4 mx-3">
                        {" "}
                        An OTP has been sent to{" "}
                        <span>9876543210</span>.You mat not
                        reaceive the OTP if the Number is not
                        Registered with PROHIREE
                      </p>
                      <input
                        type="submit"
                        className="btn login_mbtn mt-4"
                        value="Login"
                      />
                    </div>

                    <p className="text-center">or</p>
                    <div className="use_email_login text-center">
                      <a onClick={() => handleButtonClick()}>
                        {" "}
                        <a
                          className="use_mail_btn mt-4 font-weight-bold "
                          type="button"
                          onClick={() => handleButtonClick2()}
                        >
                          Use Email to LogIN
                        </a>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="otp_login">
                    <div class="input-group mb-3">
                      <div class="input-group-prepend country_code">
                        <span class="input-group-text">
                          +91
                        </span>
                      </div>
                      <input
                        type="number"
                        class="form-control mobile_no"
                        placeholder="Enter Mobile Number..."
                        aria-label="Mobile Number"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div>
                      {" "}
                      <small className="mb-3 font-weight-bold text-center">
                        You will Receive an OTP on this Number{" "}
                      </small>
                    </div>

                    <button
                      className="get_otp_btn btn mt-4"
                      type="submit"
                      onClick={() => handleButtonClick2()}
                    >
                      Get OTP
                    </button>

                    <p className="text-center my-3">or</p>
                    <div className="use_email_login text-center">
                      <a
                        className="use_mail_btn mt-2 font-weight-bold"
                        type="button"
                        onClick={() => handleButtonClick()}
                      >
                        Use Email to LogIN
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="login_content">
                <form action="#" className="mt-4">
                  <div className="input-group mb-4">
                    <div className="input-group-prepend country_code">
                      <span className="input-group-text px-3">
                        <i className="fas fa-envelope"></i>
                      </span>
                    </div>
                    <input
                      type="email"
                      className="form-control mobile_no"
                      placeholder="Enter Your Email"
                      aria-label="Email"
                      aria-describedby="basic-addon1.2"
                      required
                    />
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend country_code">
                      <span className="input-group-text px-3">
                        <i className="fas fa-lock"></i>
                      </span>
                    </div>
                    <input
                      type="Password"
                      className="form-control mobile_no"
                      placeholder="Enter Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1.4"
                      required
                    />
                  </div>

                  <a
                    href="#forgot"
                    className="forgot"
                    onClick={() => handleButtonClick3()}
                  >
                    Forgot password?
                  </a>
                  {/*----------------------------- login button ----------------------------------------*/}
                  <input
                    type="submit"
                    className="btn login_mbtn mt-4"
                    value="Login"
                  />
                </form>

                <div className="text-center my-3">
                  <a
                    className="use_mail_btn otp_btn text-center"
                    onClick={() => handleButtonClick()}
                  >
                    Use OTP to LogIN
                  </a>
                </div>

                <div className="not_mem text-center align-items-center pt-3">
                    Not a member? <a href="#" className="font-weight-bold" onClick={()=>handleChange("event",1)}> Signup now</a> 
                </div>
              </div>
            )}
          </div>
        )}
      </div>
        );
  }
export default Login;


