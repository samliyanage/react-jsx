// Import the React and ReactDOM files
import React from 'react';
import ReactDOM from 'react-dom';

//Create a React component
const App = () =>{
    const buttonText={text:"Hello"};
    const labelText="Enter Name"
    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor:'blue', color:'white'}}>{buttonText.text}</button>
        </div>
    );
};

//Take the React component and show on the  Screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);