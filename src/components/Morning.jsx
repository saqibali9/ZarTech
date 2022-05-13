import React,{useState} from 'react';

let Morning = () => {

    let [stateMorning,setstateMorning] =useState(
        {
            morn: 'Hello waste guy'
        }
    );

    let boss1 = () => {
        setstateMorning(()=>({
            morn :'Boss ra Lucha'
        }));
    }

    let boss2 = () => {
        setstateMorning(()=>({
            morn :'Ayyayyo vaddamma'
        }));
    }

    let boss3 = () => {
        setstateMorning(()=>({
            morn :'Sukhibhava'
        }));
    }

    let{morn} = stateMorning;

    return(
      <React.Fragment>
          <div className="card">
              <div className="card-body">
                  <h3>{morn}</h3>
                  <a href="#" className='btn btn-secondary m-2'  onClick={boss1}> No1 dash</a>
                  <a href="#" className='btn btn-secondary m-2' onClick={boss2}>No2 dash</a>
                  <a href="#" className='btn btn-secondary m-2' onClick={boss3}>No3 dash</a> 
              </div>
          </div>
      </React.Fragment>
    );
};

export default Morning;