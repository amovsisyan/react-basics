import React from 'react';
import CSSClasses from './Person.css';

const person = (props) => {
    return <div className={CSSClasses.Person}>
            {/*<p>I am person! And I am {Math.floor(Math.random() * 30)}</p>*/}
            <p onClick={props.click}>I am {props.name}! And I am {props.age} age old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.inputChange} value={props.name}/>
        </div>
};

export default person;