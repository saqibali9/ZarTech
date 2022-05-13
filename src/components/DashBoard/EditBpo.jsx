import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { TagsInput } from "react-tag-input-component";

let EditBpo =() =>{

    const [selected, setSelected] = useState([]);
    const [experience, setExperience] = useState(false);

    const radiohandling = (e) => {};
    
      const experienceButton = () => {
        setExperience(true);
      };
    
      const fresherButton = () => {
        setExperience(false);
      };

    return(
        <>

   <div className="container dashboard_edit_container">
        <div className="float-right">
            <Link to="/"> <i className="fas fa-arrow-left left_arrow"></i></Link>
        </div>
        <div className="edit_heading text-center">
            <h1 className="my-4 main_heading">Edit Profile Information</h1>
        </div>

        <div className="edit_top_content">
            <div className="text-center my-2">
                <div className="d-flex edit_img">
                    <img className="" src="#" alt=""/>
                </div>
                <div>
                    <h2 className="student_name text-center my-3">Toni Kroos</h2>
                </div>

            </div>
        </div>

        <div className="row">

            <div className="col-lg-12 ">          

                <div className="resume_box">
                    <div className="skill_heading">
                        <h4 className="pl-3"> Employement <a className=" btn_edit float-right " data-toggle="collapse"
                                href="#expclpse" role="button" aria-expanded="false" aria-controls="expclpse">
                                <i className="fas fa-pencil-alt"></i>
                            </a>
                        </h4>


                        <div className="collapse " id="expclpse">

                           
                            <div>
                                <a className=" btn_edit_1 pl-3 my-3" data-toggle="collapse" href="#collapseinner2"
                                    role="button" aria-expanded="false" aria-controls="collapseinner2"> Employement Type
                                </a>
                                <div className=" my-3 mx-3">
                                    <form>
                                    <div className="form-group">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="fresher"
                          onClick={() => fresherButton()}
                          
                        />
                        <label className="form-check-label" for="inlineRadio1">
                          Fresher
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="Part Time"
                          onClick={() => experienceButton()}
                        />
                        <label
                          className="form-check-label"
                          for="inlineRadio2"
                          name="experienced"
                        >
                          Experienced
                        </label>
                      </div>
                    </div>

                    <div>
                    {experience ? (
                       <div className="types_total" id="types">
                               

                       <div>
                           <a className=" btn_edit_1 pl-3 my-3" data-toggle="collapse" role="button"
                               aria-expanded="false" aria-controls="collapseinner2"> Company Name
                           </a>
                           <div className=" my-3">
                               <form>
                                   <div className="form-group mt-3">

                                       <input type="text" className="form-control form_input pl-1 p-3"
                                           id="company_name" aria-describedby="emailHelp"
                                           placeholder="Enter Company Name"/>
                                   </div>
                               </form>
                           </div>
                       </div>

                

                       <div>
                           <a className=" btn_edit_1 pl-3 my-3" data-toggle="collapse" role="button"
                               aria-expanded="false" aria-controls="collapseinner2"> Designation
                           </a>
                           <div className=" my-3">
                               <form>
                                   <div className="form-group mt-3">

                                       <input type="text" className="form-control form_input pl-1 p-3"
                                           id="Designation" aria-describedby="emailHelp"
                                           placeholder="Enter Designation"/>
                                   </div>
                               </form>
                           </div>
                       </div>

                     

                       <div>
                           <a className=" btn_edit_1 pl-3 show" href="#"> Years Of Exp </a>
                           <div className=" my-3">
                               <form>
                                   <div className="form-row mx-1">

                                       <select id="yrs_exp" className="form-control">
                                           <option selected> 0</option>
                                           <option>1</option>
                                           <option>2</option>
                                           <option>3</option>
                                           <option>4</option>
                                           <option>5</option>
                                           <option>6</option>
                                           <option>7</option>
                                           <option>8</option>
                                           <option>9</option>
                                           <option>10</option>
                                           <option>10+</option>

                                       </select>

                                   </div>
                               </form>
                           </div>
                       </div>

                    

                       <div>
                           <a className=" btn_edit_1 pl-3 show" data-toggle="collapse" role="button"
                               aria-expanded="false" aria-controls="collapseinner1"> Salary
                           </a>
                           <div className=" my-3">
                               <form>
                                   <div className="form-row mx-1">
                                       <div className="col">
                                           <input type="text" className="form-control form_input pl-1 p-3"
                                               id="curr_sal" aria-describedby="emailHelp"
                                               placeholder="Enter Current Salary"/>
                                       </div>
                                       <div className="col">
                                           <input type="text" className="form-control form_input pl-1 p-3"
                                               id="exp_sal" aria-describedby="emailHelp"
                                               placeholder="Enter Expected salary"/>
                                       </div>
                                   </div>
                               </form>
                           </div>
                       </div>

                   
                       

                       <div>
                           <a className=" btn_edit_1 pl-3 show" href="#"> Notice Period </a>
                           <div className=" my-3">
                               <form>
                                   <div className="form-row mx-1">

                                       <select id="ntc_prd" className="form-control">
                                           <option selected> 0months</option>
                                           <option>1months</option>
                                           <option>2months</option>
                                           <option>3months</option>
                                           <option>4months</option>
                                           <option>5months</option>
                                           <option>6months</option>
                                           <option>7months</option>

                                       </select>

                                   </div>
                               </form>
                           </div>
                       </div>


                   </div>
                    ) : null}
                  </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

              

                <div className="resume_box">
                    <div className="skill_heading">
                        <h4 className="pl-3">Key Skills <a className=" btn_edit float-right " data-toggle="collapse"
                                href="#collapseExample" role="button" aria-expanded="false"
                                aria-controls="collapseExample">
                                <i className="fas fa-pencil-alt"></i>
                            </a>
                        </h4>
                        <span></span>

                        <div className="collapse" id="collapseExample">
                            <form>
                                <div className="form-group mt-3">
                                    <label for="input" className="pl-3  btn_edit_1">Skills</label>
                            <TagsInput
                          value={selected}
                          onChange={setSelected}
                          name="Skills"
                          placeHolder="Enter Your Skills "
                          className="form_control go309598777 skills_add"
                          id="tag-input1"
                        />

                                </div>
                            </form>
                        </div>
                    </div>
                </div>

              
                <div className="resume_box ">
                    <div className="skill_heading">
                        <h4 className="pl-3 mb-2"> Educational Qualifications <a className=" btn_edit float-right "
                                data-toggle="collapse" href="#collapseExample8" role="button" aria-expanded="false"
                                aria-controls="collapseExample8">
                                <i className="fas fa-pencil-alt"></i>
                            </a>

                        </h4>
                        <span></span>

                        <div className="collapse" id="collapseExample8">
                            <div>
                                <a className=" btn_edit_1 pl-3 show" href="#"> Education </a>
                            </div>

                      
                            <div className="modal_content">
                          <form action="#">
                            <div className="row">
                              <div className=" col-lg-12 col-md-12">
                                <form>
                                  <div className="form-group">
                                    <label className="ml-3"> Highest Postgraduation</label>
                                    <select
                                      id="highGrad"
                                      className="form_control form_control_higher"
                                      onChange={(e) => onselect(e)}
                                    >
                                      <option hidden>
                                        {" "}
                                        Highest Postgraduation
                                      </option>
                                      <option value="phd">PHD</option>
                                      <option value="postgraduation">
                                        Masters / Postgraduation
                                      </option>
                                      <option value="undergraduation">
                                        Undergraduation / Diploma
                                      </option>
                                      <option value="inter" className="py-2">
                                        Intermediate
                                      </option>
                                    </select>
                                  </div>
                                </form>

                                <div className="sets mt-2">
                                  <div className="phd_set" id="phdSet">
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <label> Course</label>

                                        <input
                                          type="text"
                                          placeholder="Enter Your postgraduation Course"
                                          id="phdcourse"
                                          className="form_control"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <label> Specialization</label>
                                        <input
                                          type="text"
                                          className="form_control "
                                          id="university"
                                          aria-Describedby="emailHelp"
                                          placeholder="Enter Your Specialization"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <label> University/Institute</label>
                                        <input
                                          type="text"
                                          className="form_control "
                                          id="university"
                                          aria-Describedby="emailHelp"
                                          placeholder="Select University Name"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12 pt-2">
                                      <label className="ml-2 "> Course Type </label>
                                      <div className="form-group">
                                        <div className="form-check form-check-inline">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            name="inlineRadioOptions"
                                            id="inlineRadio1"
                                            value="Full time"
                                          />
                                          <label
                                            className="form-check-label"
                                            for="inlineRadio1"
                                          >
                                            Full Time
                                          </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            name="inlineRadioOptions"
                                            id="inlineRadio2"
                                            value="Part Time"
                                          />
                                          <label
                                            className="form-check-label"
                                            for="inlineRadio2"
                                          >
                                            Part Time
                                          </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                          <input
                                            className="form-check-input"
                                            type="radio"
                                            name="inlineRadioOptions"
                                            id="inlineRadio3"
                                            value=" Correspondence/Distance Learning"
                                          />
                                          <label
                                            className="form-check-label"
                                            for="inlineRadio3"
                                          >
                                            Correspondence/Distance Learning
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <label> Passed Out Year</label>
                                        <input
                                          type="text"
                                          className="form_control "
                                          id="university"
                                          aria-Describedby="emailHelp"
                                          placeholder="Enter Passed Out Year"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="form-group">
                                        <label>
                                          Marks in Percentage or CGPA{" "}
                                        </label>

                                        <input
                                          type="text"
                                          placeholder="Enter your Marks in Percentage or CGPA"
                                          id="grading"
                                          className="form_control"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>


                        </div>
                    </div>
                </div>

              


                <div className="resume_box">
                    <div className="skill_heading">
                        <h4 className="pl-3">Personal Details <a className=" btn_edit float-right" data-toggle="collapse"
                                href="#collapseExample2" role="button" aria-expanded="false"
                                aria-controls="collapseExample2">
                                <i className="fas fa-pencil-alt"></i>
                            </a>
                        </h4>
                        <div className="collapse" id="collapseExample2">

                            <div>
                                <a className=" btn_edit_1 pl-3 show" data-toggle="collapse" href="#collapseinner1"
                                    role="button" aria-expanded="false" aria-controls="collapseinner1"> Date of Birth
                                </a>
                                <div className=" my-3">
                                <input className="form_control" type="date" />
                                </div>
                            </div>

                           

                            <div>
                                <a className=" btn_edit_1 pl-3 my-3" data-toggle="collapse" href="#collapseinner2"
                                    role="button" aria-expanded="false" aria-controls="collapseinner2"> Gender </a>
                                <div className=" my-3">
                                    <form>
                                        <div className="mx-3">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="male" value="option1"/>
                                                <label className="form-check-label" for="inlineRadio1">Male</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="female" value="option2" />
                                                <label className="form-check-label" for="inlineRadio2">Female</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                    id="others" value="option3"/>
                                                <label className="form-check-label" for="inlineRadio2">Others</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>


                            <div>
                                <a className=" btn_edit_1 pl-3 my-3" data-toggle="collapse" href="#collapseinner2"
                                    role="button" aria-expanded="false" aria-controls="collapseinner2"> Marital Status
                                </a>
                                <div className=" my-3">
                                    <form>

                                        <select id="marriage" className="form_control form_control_higher">
                                            <option selected>Marital Status</option>
                                            <option>Married</option>
                                            <option>UnMarried</option>
                                            <option>Others</option>
                                        </select>

                                    </form>
                                </div>
                            </div>

                           

                            <div>
                                <a className=" btn_edit_1 pl-3 my-3" data-toggle="collapse" href="#collapseinner2"
                                    role="button" aria-expanded="false" aria-controls="collapseinner2"> Permanent
                                    Address </a>
                                <div className=" my-3">
                                    <form>
                                        <div className="form-group mt-3">

                                            <input type="text" className="form-control form_input pl-1 p-3" id="p_address"
                                                aria-describedby="emailHelp" placeholder="Enter your Address..."/>
                                        </div>
                                    </form>
                                </div>
                            </div>

                          

                            <div>
                                <a className=" btn_edit_1 pl-3 my-3" data-toggle="collapse" href="#collapseinner2"
                                    role="button" aria-expanded="false" aria-controls="collapseinner2"> Pin-Code </a>
                                <div className=" my-3">
                                    <form>
                                        <div className="form-group mt-3">

                                            <input type="text" className="form-control form_input pl-1 p-3" id="pincode"
                                                aria-describedby="emailHelp" placeholder="Enter your Area Pin-Code..."/>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            

                           

                        

                            <div>
                                <a className=" btn_edit_1 pl-3 my-3" data-toggle="collapse" href="#collapseinner2"
                                    role="button" aria-expanded="false" aria-controls="collapseinner2">Select Preffered
                                    Location</a>
                                <div className=" my-3">
                                    <form>
                                        <div className="form-group mt-3">

                                            <input type="text" className="form-control form_input pl-1 p-3" id="pref_loc"
                                                aria-describedby="emailHelp" placeholder="Enter your Preffered location"/>
                                        </div>
                                    </form>
                                </div>
                            </div>

                          
                            <div>
                               
                                <form>
                                    <div className="form-group mt-3">
                                        <label for="input" className="pl-3  btn_edit_1">Languages Known</label>
                                        <input type="text" className="form-control" id="tag-input2" placeholder="Enter Languages You know"/>
                                    </div>
                                </form>
                            </div>






                        </div>

                    </div>
                </div>



                <div className="submit_form my-4 text-center">
                    <button type="submit" className="submit_btn">Submit</button>
                </div>

            </div>

        </div>
    </div>


   </>     
    );
}

export default EditBpo;