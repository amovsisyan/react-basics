import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

const cockpit = (props) => {
    const style = {
        backgroundColor: '#ccc',
        padding: '8px',
        ':hover': {backgroundColor: 'lightgreen',}
    };

    let classes = [];

    if (props.persons.length <= 1) {
        classes.push('red');
    }

    if (props.persons.length <= 0) {
        classes.push('bold');
    }

    if (props.showPersons) {
        style.backgroundColor = '#00FF00';
        style[':hover'] = {
            backgroundColor: 'red'
        }
    }

    return (
        <div>
            <h1 className={classes.join(' ')}>Here, {props.title}</h1>
            <button
                onClick={props.switchNameClicked.bind(this, 'Maxooooooo')}
            >
                Button
            </button>

            <button
                onClick={props.toggleClicked}
                style={style}
            >
                Toggle Persons
            </button>
        </div>
    );
};

cockpit.propTypes = {
    title: PropTypes.string.isRequired,
    persons: PropTypes.array.isRequired,
    showPersons: PropTypes.bool.isRequired,
    switchNameClicked: PropTypes.func.isRequired
};

export default Radium(cockpit);