
// import './App.css';
// import React from 'react';
// import Arsenal from "./components/Arsenal"
// import Modal from './components/Modal';
// import Ronaldo from "./components/Ronaldo";
// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup"
// import Navbar from './components/Nabbar/Navbar';
// import { Pagination } from '@mui/material';
// import Realmadrid from './components/Realmadrid';
// import Counter from './components/Counter';
// import Morning from './components/Morning';
// import StudentBpo from './components/DashBoard/StudentBpo';
// import { BrowserRouter, Routes ,Route } from 'react-router-dom';
// import EditBpo from './components/DashBoard/EditBpo';


// let App = () => {
//   return (
//    <React.Fragment>

//    <BrowserRouter>
//    <Routes>

//      <Route exact path="/" element={<StudentBpo/>}/>
//      <Route exact path="/EditBpo" element={<EditBpo />}/>
//    </Routes>
//    </BrowserRouter>

//    {/* <h2>Functional Component Using STATE useState()</h2>
//    <Counter/>
//    <Morning/>
//    <Realmadrid/> */}

//    </React.Fragment>
//   );
// }

// export default App;


import React, { useEffect } from 'react'
import axios from 'axios'

import PropsData from './components/PROPS/PropsData'
import MainTabs from './ZarTech/MainTabs'

const App = () => {
  useEffect(()=>{axios.get("http://localhost:5000/users").then(res=>console.log(res.data))},[])
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
  {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}
  <a class="navbar-brand" href="#">UNI Resto Cafe</a>

  {/* <div class=" navbar-collapse" id="navbarTogglerDemo03"> */}
    <ul class="navbar-nav ml-auto mt-2 mt-lg-0" >
      <li class="nav-item active">
        <a class="nav-link" href="#">MyOrders<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><span ><i class="fas fa-shopping-cart" style={{fontSize:"25px"}}></i>
        <span class='badge badge-warning' id='lblCartCount'>  </span></span></a>
      </li>
    </ul>
    
  {/* </div> */}
  </div>
</nav>
      <MainTabs/>
    </div>
  )
}

export default App

