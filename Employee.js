import React from 'react';

function Employee(props) {
    return (
        <div>
            <h1>Hello,{props.name}</h1>
            <h1>Emp Id: {props.empid}</h1>
           

        </div>
    );
}
export default Employee;