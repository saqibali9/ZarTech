import React from "react";
import { useState } from "react";

let Realmadrid = () => {
  let [state1, setState1] = useState({
    employers: [
      {
        name: "SaiPavan",
        course: "Full Stack",
      },
      {
        name: "Dinesh",
        course: "Full Stack",
      },
    ],
  });
  let { employers } = state1; //Destructuring

  const [color,setColor] = useState('primary')

  function dinu(){
    setColor('secondary')
  }

  return (
    <React.Fragment>
      <div className="card">
        <div className="card-body">
          <h3> Name : {employers[0].name} </h3> <br />
          <h3> course : {employers[0].course} </h3>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h3> Name : {employers[1].name} </h3> <br />
          <h3> course : {employers[1].course} </h3>
        </div>
      </div>

      <div>
        <div
          className="card">
          <div className="card-body" backgroundColor ={color}
          onClick={() => dinu()}>
            <h1>Dinu</h1>
            <h1>Hit-Man</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Realmadrid;
