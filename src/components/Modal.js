// import React, {useState} from 'react';


// let Modal = () => {
//         const [first, setState]  = useState(false);
//         const handleButtonClick = () => {
//           setState(!first);
//         };

//         const [second, setState1] = useState(false);
//         const handleButtonClick2 = () => {
//           setState1(!second);
//         };

//         const [third, setState2] = useState(false);
//         const handleButtonClick3 = () => {
//           setState2(!third);
//         };

//     return(
//         <React.Fragment>
            	
// 	<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#MyModal">
// 		SignIN/SIgnUP
// 	</button>

	
// 	<div className="modal fade " id="MyModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
// 		aria-hidden="true">
// 		<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
// 			<div className="modal-content modal_content">
// 				<div className="modal-body">
//         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
// 						<span aria-hidden="true">&times;</span>
// 					</button>
// 					<div className="row">
// 						<div className="col-lg-7 col-md-12 pt-4">
// 							<section className="main">
// 								<div className="form_wrapper">
// 									<input type="radio" className="radio" name="radio" id="login" checked />
// 									<input type="radio" className="radio" name="radio" id="signup" />
// 									<div className="tile">
// 										<h3 className="login">Login Form</h3>
// 										<h3 className="signup">Signup Form</h3>
// 									</div>

// 									<label className="tab login_tab" for="login">
// 										Login
// 									</label>

// 									<label className="tab signup_tab" for="signup">
// 									Signup
// 									</label>
// 									<span className="shape"></span>
// 									<div className="form_wrap">

// 										<div className="form_fild login_form">
                                     
//                                      {
//                                          third?
                                   

//                                   <div class="forgot_popup">
//                                     <div class="forgot_popup_content">
//                                         <h2 class="forgot_popup_title">Forgot Password</h2>
//                                         <p class="forgot_popup_body text-justify"> Lost your password? Please enter Registered Mobile Number. You will receive your password.</p>
//                                     </div>
//                                     <div class="input-group mb-4">
//                                     <div class="input-group-prepend country_code">
//                                      <span class="input-group-text">+91</span>
//                                    </div>
//                                <input type="number" class="form-control mobile_no" placeholder="Enter Mobile Number..." aria-label="Mobile Number" aria-describedby="basic-addon1.3" required/>
                                         
//                        </div>
//                                     <button className='btn otp_btn text-center' type='submit'>Reset Password</button>
//                                    <p className='text-center'>or</p>
//                                          <div className="use_email_login">
//                                          <a className='use_mail_btn  mt-4 ' type='button' onClick={()=>handleButtonClick3()}>Use Email to LogIN</a>
//                                          </div>
//                                 </div>
//                                  :
//                                 <div className='login_main_content'>
//                                     {
//                                       first?
                                    
//                                         <div className="mobile_otp my-4">
//                                             {
//                                                 second?                                            

//                                             <div className="login_otp my-3">
//                                              <h4 className='mx-2'>Mobile Number</h4>
//                                              <p className='Entered_mobile_no mx-3'>+91 - <span>9876543210</span> <i class="fas fa-pencil-alt ml-3" onClick={()=>handleButtonClick2()}></i></p>
                                            
//                                              <div className="enter_otp">
//                                                 <div className="input_group">
// 											               	<input type="number" className="input" placeholder="Enter OTP sent on Your Mobile No." />
// 											                     </div>
//                                                 <small className='ml-3'> Your OTP valid for 5min...</small> 

//                                               <p className='mt-4 mx-3'> An OTP has been sent to <span>9876543210</span>.You mat not reaceive the OTP if the Number is not Registered with PROHIREE</p>
//                                               <input type="submit" className="btn login_mbtn mt-4" value="Login"/>
//                                              </div>
                                            
//                                              <p className='text-center'>or</p>
//                                          <div className="use_email_login text-center">
                                         
//                                         <a onClick={()=>handleButtonClick()}>  <a className='use_mail_btn mt-4' type='button' onClick={()=>handleButtonClick2()}>Use Email to LogIN</a></a>  
//                                          </div>

//                                             </div>
                                            
//                                                :
//                                             <div className="otp_login">

//                                             <div class="input-group mb-3">
//                                           <div class="input-group-prepend country_code">
//                                           <span class="input-group-text">+91</span>
//                                            </div>
//                                         <input type="number" class="form-control mobile_no" placeholder="Enter Mobile Number..." aria-label="Mobile Number" aria-describedby="basic-addon1"/>
                                         
//                                           </div>
//                                           <div> <small className='mb-3 font-weight-bold text-center'>You will Receive an OTP on this Number </small></div>
                                         
//                                           <button className='get_otp_btn btn mt-4' type='submit' onClick={()=>handleButtonClick2()}>Get OTP</button>
                                           
//                                           <p className='text-center my-3'>or</p>
//                                          <div className="use_email_login text-center">
                                         
//                                          <a className='use_mail_btn mt-2' type='button' onClick={()=>handleButtonClick()}>Use Email to LogIN</a>
//                                          </div>

//                                             </div>
//                                      }
//                 					</div>
//                                         :

//                                             <div className="login_content">

//                                               <form action="" className='mt-4'>
//                                               <div class="input-group mb-4">
//                       <div class="input-group-prepend country_code">
//                       <span class="input-group-text"><i class="fas fa-envelope"></i></span>
//                        </div>
//                       <input type="email" class="form-control mobile_no" placeholder="Enter Your Email" aria-label="Email" aria-describedby="basic-addon1.2" required/>
                                         
//                        </div>


//                        <div class="input-group mb-3">
//                       <div class="input-group-prepend country_code">
//                       <span class="input-group-text"><i class="fas fa-lock"></i></span>
//                        </div>
//                       <input type="Password" class="form-control mobile_no" placeholder="Enter Password" aria-label="Password" aria-describedby="basic-addon1.4" required/>
                                         
//                        </div>
                                             

// 											<a href="#forgot" className="forgot" onClick={()=>handleButtonClick3()}>Forgot password?</a>

// 											<input type="submit" className="btn login_mbtn mt-4 mb-5" value="Login" />

//                       </form>

//                          <div className="text-center mb-3">
//                           <a className='use_mail_btn otp_btn text-center' onClick={()=>handleButtonClick()}>Use OTP to LogIN</a>
//                           </div>

// 											<div className="not_mem text-center align-items-center">
// 												<label for="signup">Not a member? <span> Signup now</span></label>
// 											</div>

//                                             </div>
											
//                                            }

//                                            </div>
//                                            }
// 										</div>
                                        

// 									<div className="form_fild signup_form ">

//                     <form action="">

//                     <div class="input-group mb-4 mt-3">
//                       <div class="input-group-prepend country_code">
//                       <span class="input-group-text"><i class="fas fa-user"></i></span>
//                        </div>
//                       <input type="text" class="form-control mobile_no" placeholder="Enter Your Name" aria-label="Name" aria-describedby="basic-addon1.1" required/>
                                         
//                        </div>

// 											 <div class="input-group mb-4">
//                       <div class="input-group-prepend country_code">
//                       <span class="input-group-text"><i class="fas fa-envelope"></i></span>
//                        </div>
//                       <input type="email" class="form-control mobile_no" placeholder="Enter Your Email" aria-label="Email" aria-describedby="basic-addon1.2" required/>
                                         
//                        </div>

// 											 <div class="input-group mb-4">
//                       <div class="input-group-prepend country_code">
//                       <span class="input-group-text">+91</span>
//                        </div>
//                       <input type="number" name='dinesh' class="form-control mobile_no" id='mobile_no' placeholder="Enter Mobile Number..." aria-label="Mobile Number" aria-describedby="basic-addon1.3" required/>
//                       <div class="input-group-append country_code1">
//                       <span class="input-group-text ">Verify</span>
//                        </div>             
//                        </div>

// 											 <div class="input-group mb-4">
//                       <div class="input-group-prepend country_code">
//                       <span class="input-group-text"><i class="fas fa-lock"></i></span>
//                        </div>
//                       <input type="Password" class="form-control mobile_no" placeholder="Enter Password" aria-label="Password" aria-describedby="basic-addon1.4" required/>
                                         
//                        </div>

// 											<input type="submit" className="btn login_mbtn mt-3"  value="Signup" />

//                         </form>                    

// 										</div>
// 									</div>

// 								</div>
// 							</section>
// 						</div>
// 						<div className="col-lg-5 col-md-12">

// 						</div>
// 					</div>

// 				</div>

// 			</div>
// 		</div>
// 	</div>

//         </React.Fragment>
//     )
// }

// export default Modal;