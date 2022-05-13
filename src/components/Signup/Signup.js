import React from 'react';
import { TextField } from '@mui/material';

const Signup = () =>{

  return(
    <React.Fragment>
    <div className="form_fild signup_form ">
                       <form >
                         <div className="input-group mb-4 mt-3">
                           <div className="input-group-prepend country_code">
                             <span className="input-group-text px-3">
                               <i className="fas fa-user"></i>
                             </span>
                           </div>
                           <input
                             type="text"
                             name="signup_name"
                             className="form-control mobile_no"
                             placeholder="Enter Your Name"
                             aria-label="Name"
                             aria-describedby="basic-addon1.1"
                           />
                         </div>

                         <div className="input-group mb-4">
                           <div className="input-group-prepend country_code">
                             <span className="input-group-text px-3">
                               <i className="fas fa-envelope"></i>
                             </span>
                           </div>
                           <input
                             type="email"
                             name="signup_email"
                             className="form-control mobile_no"
                             placeholder="Enter Your Email"
                             aria-label="Email"
                             aria-describedby="basic-addon1.2"
                           />
                         </div>

                         <div className="input-group mb-4">
                           <div className="input-group-prepend country_code">
                             <span className="input-group-text">+91</span>
                           </div>
                           <input
                             type="number"
                             name="signup_number"
                             className="form-control mobile_no"
                             id="mobile_no"
                             placeholder="Enter Mobile Number..."
                             aria-label="Mobile Number"
                             aria-describedby="basic-addon1.3"
                             required
                           />
                           <div className="input-group-append country_code1">
                             <span className="input-group-text ">Verify</span>
                           </div>
                         </div>
                         <div className="input-group mb-4">
                           <div className="input-group-prepend country_code">
                             <span className="input-group-text px-3">
                               <i className="fas fa-lock"></i>
                             </span>
                           </div>
                           <input
                             type="Password"
                             name="signup_password"
                             class="form-control mobile_no"
                             placeholder="Enter Password"
                             aria-label="Password"
                             aria-describedby="basic-addon1.4"
                             required
                           />
                         </div>

                         <input
                           type="submit"
                           className="btn login_mbtn mt-3"
                           value="Signup"
                         />
                       </form>
                     </div>


                     <TextField id="outlined-basic" label="Outlined" variant="outlined" />

 </React.Fragment>
  );
}

export default Signup;