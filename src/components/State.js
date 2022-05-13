import React from 'react';

class State extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            employee : {
                name : 'Dinesh',
                age : 23
            }
        }
    }


    render() {

        return(
            <React.Fragment>

            <div className="card">
                <div className="card-body">
                    <span>NAME : {this.state.employee.name}</span><br/>
                    <span>NAME : {this.state.employee.age}</span>
                </div>
            </div>

            </React.Fragment>
        );
    }




}