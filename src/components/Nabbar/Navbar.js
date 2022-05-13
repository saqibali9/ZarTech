import React from "react";
import Arsenal from "../Arsenal";

function Navbar() {
  return(
    <React.Fragment>
      <button type="button"
                      className="btn  navbar-btn"
                      data-toggle="modal"
                      data-target="#MyModal">
                      <i className="fas fa-user"></i> SIGNUP/SIGNIN
                    </button>

                    <div
        className="modal fade signIN"
        id="MyModal"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content modal_content1">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-7 col-md-12 pt-4">
                  <section className="main">
                    <div className="form_wrapper">
                      <div className="form_wrap">

                     
                     <Arsenal/>

                     </div>
                    </div>
                  </section>
                </div>

                <div className="col-lg-5 col-md-12">
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;