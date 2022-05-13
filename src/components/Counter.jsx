import React,{useState} from 'react';

let Counter = () =>{

    let[statecounter,setStatecounter] = useState({
      count : 0}
    );
   
    let{count} = statecounter;

    let increment =() => {
        setStatecounter ( (state) => ({
          count : statecounter.count+1
        })
        );
    }

    let decrement =() => {
        setStatecounter ( (state) => ({
          count : statecounter.count-1
        })
        );
    }

    return (
        <div className="card">
            <div className="card-body">
                <h2 className='text-center'> {count} </h2>
                <div className="btn btn-primary m-3" onClick={increment}> Increment</div>
                <div className="btn btn-danger" onClick={decrement}> Decrement</div>
            </div>
        </div>
    );
};

export default Counter;