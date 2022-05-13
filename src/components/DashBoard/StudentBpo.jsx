import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';

let StudentBpo = () => {
  return (
    <React.Fragment>
      <section id="dashboardnav">
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                src="/img/ProHireeLogo.png"
                className="img-fluid"
                height="50px"
                width="70px"
                alt="DINU"
              />
            </a>

            <form className="form-inline my-2 my-lg-0 ml-auto">
              <a href="/Sign In/in.html">
                {" "}
                <button className="btn my-2 my-sm-0 dash_submit" type="submit">
                  LogOut
                </button>
              </a>
            </form>
          </div>
        </nav>
      </section>

      <section id="dashboard_main_content">
        <div className="container">
          <div className="col-lg-12">
            <ul className="dashboard_box">
              <li>
                <div className="dashboard_box_data">
                  <div className="d-flex mb-4 mx-1">
                    <div className="dashboard_img">
                      <span>
                        <img alt="" src="" />
                      </span>
                    </div>
                    <div className="dashboard_name">
                      <h4 className="my-2 mx-3">
                        <a href="#">Student Name</a>
                      </h4>
                      <ul className="py-3">
                        <li>
                          <i className="far fa-clock m-2 "></i>Email
                        </li>
                        <li>
                          <i className="far fa-clock m-2"></i>Mobile Number
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt m-2"></i>Location
                        </li>
                        <li>
                          <i className="far fa-bookmark m-2"></i>Domain
                        </li>
                        <li>
                          <i className="far fa-clock m-2"></i>Specialization
                        </li>
                      </ul>
                    </div>
                  </div>

                  <label className="dashboard_wishlist">
                    <Link to='/EditBpo'>
                      <button className="edit_bt px-2">
                        <i className="fas fa-pencil-alt pl-1"></i>
                      </button>
                    </Link>
                  </label>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-lg-12">
            <ul className="dashboard_box">
              <li>
                <div className="dashboard_box_data">
                  <div className="d-flex mb-4 mx-1">
                    <div className="dashboard_img">
                      <span>
                        <img alt="" src="" />
                      </span>
                    </div>
                    <div className="dashboard_name">
                      <h4 className="my-2 mx-3">
                        <a href="#">Student Name</a>
                      </h4>
                      <ul className="py-3">
                        <li>
                          <i className="far fa-clock m-2 "></i>Email
                        </li>
                        <li>
                          <i className="far fa-clock m-2"></i>Mobile Number
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt m-2"></i>Location
                        </li>
                        <li>
                          <i className="far fa-bookmark m-2"></i>Domain
                        </li>
                        <li>
                          <i className="far fa-clock m-2"></i>Specialization
                        </li>
                      </ul>
                    </div>
                  </div>

                  <label className="dashboard_wishlist">
                    <Link to="/EditBpo">
                      <button className="edit_bt px-2">
                        <i className="fas fa-pencil-alt pl-1"></i>
                      </button>
                    </Link>
                  </label>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-lg-12">
            <ul className="dashboard_box">
              <li>
                <div className="dashboard_box_data">
                  <div className="d-flex mb-4 mx-1">
                    <div className="dashboard_img">
                      <span>
                        <img alt="" src="" />
                      </span>
                    </div>
                    <div className="dashboard_name">
                      <h4 className="my-2 mx-3">
                        <a href="#">Student Name</a>
                      </h4>
                      <ul className="py-3">
                        <li>
                          <i className="far fa-clock m-2 "></i>Email
                        </li>
                        <li>
                          <i className="far fa-clock m-2"></i>Mobile Number
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt m-2"></i>Location
                        </li>
                        <li>
                          <i className="far fa-bookmark m-2"></i>Domain
                        </li>
                        <li>
                          <i className="far fa-clock m-2"></i>Specialization
                        </li>
                      </ul>
                    </div>
                  </div>

                  <label className="dashboard_wishlist">
                    <Link to="/EditBpo">
                      <button className="edit_bt px-2">
                        <i className="fas fa-pencil-alt pl-1"></i>
                      </button>
                    </Link>
                  </label>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-lg-12">
            <ul className="dashboard_box">
              <li>
                <div className="dashboard_box_data">
                  <div className="d-flex mb-4 mx-1">
                    <div className="dashboard_img">
                      <span>
                        <img alt="" src="" />
                      </span>
                    </div>
                    <div className="dashboard_name">
                      <h4 className="my-2 mx-3">
                        <a href="#">Student Name</a>
                      </h4>
                      <ul className="py-3">
                        <li>
                          <i className="far fa-clock m-2 "></i>Email
                        </li>
                        <li>
                          <i className="far fa-clock m-2"></i>Mobile Number
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt m-2"></i>Location
                        </li>
                        <li>
                          <i className="far fa-bookmark m-2"></i>Domain
                        </li>
                        <li>
                          <i className="far fa-clock m-2"></i>Specialization
                        </li>
                      </ul>
                    </div>
                  </div>

                  <label className="dashboard_wishlist">
                    <Link to="/EditBpo">
                      <button className="edit_bt px-2">
                        <i className="fas fa-pencil-alt pl-1"></i>
                      </button>
                    </Link>
                  </label>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-lg-12">
            <ul className="dashboard_box">
              <li>
                <div className="dashboard_box_data">
                  <div className="d-flex mb-4 mx-1">
                    <div className="dashboard_img">
                      <span>
                        <img alt="" src="" />
                      </span>
                    </div>
                    <div className="dashboard_name">
                      <h4 className="my-2 mx-3">
                        <a href="#">Student Name</a>
                      </h4>
                      <ul className="py-3">
                        <li>
                          <i className="far fa-clock m-2 "></i>Email
                        </li>
                        <li>
                          <i className="far fa-clock m-2"></i>Mobile Number
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt m-2"></i>Location
                        </li>
                        <li>
                          <i className="far fa-bookmark m-2"></i>Domain
                        </li>
                        <li>
                          <i className="far fa-clock m-2"></i>Specialization
                        </li>
                      </ul>
                    </div>
                  </div>

                  <label className="dashboard_wishlist">
                    <Link to="/EditBpo">
                      <button className="edit_bt px-2">
                        <i className="fas fa-pencil-alt pl-1"></i>
                      </button>
                    </Link>
                  </label>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-lg-12">
            <ul className="dashboard_box">
              <li>
                <div className="dashboard_box_data">
                  <div className="d-flex mb-4 mx-1">
                    <div className="dashboard_img">
                      <span>
                        <img alt="" src="" />
                      </span>
                    </div>
                    <div className="dashboard_name">
                      <h4 className="my-2 mx-3">
                        <a href="#">Student Name</a>
                      </h4>
                      <ul className="py-3">
                        <li>
                          <i className="far fa-clock m-2 "></i>Email
                        </li>
                        <li>
                          <i className="far fa-clock m-2"></i>Mobile Number
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt m-2"></i>Location
                        </li>
                        <li>
                          <i className="far fa-bookmark m-2"></i>Domain
                        </li>
                        <li>
                          <i className="far fa-clock m-2"></i>Specialization
                        </li>
                      </ul>
                    </div>
                  </div>

                  <label className="dashboard_wishlist">
                    <Link to="/EditBpo">
                      <button className="edit_bt px-2">
                        <i className="fas fa-pencil-alt pb-2 pencil"></i>
                      </button>
                    </Link>
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default StudentBpo;
