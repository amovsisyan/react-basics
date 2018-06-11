import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width: 600px)': {
            width: '150px'
        }
    };

    return (
        <div className='Person' style={style}>
            {/*<p>I am person! And I am {Math.floor(Math.random() * 30)}</p>*/}
            <p onClick={props.click}>I am {props.name}! And I am {props.age} age old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.inputChange} value={props.name}/>
        </div>
    )
};

export default Radium(person);