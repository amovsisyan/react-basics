import React, {PureComponent} from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Persons from './../components/Persons/Persons';
import Cockpit from './../components/Cockpit/Cockpit';

class App extends PureComponent { // PureComponent will not let to render everything if nothing changed
    constructor(props) {
        super(props);
        console.log('App.js Constructor', props);
    }

    componentWillMount() {
        console.log('App.js WillMount');
    }

    componentDidMount() {
        console.log('App.js DidMount');
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('App.js shouldComponentUpdate', nextProps, nextState);
    //     return nextState.persons !== this.state.persons
    //         || nextState.showPersons !== this.state.showPersons; // will not let to render everything if nothing changed
    //     // return true;
    // }

    state = {
        persons: [
            {id: '123', name: "Max", age: 28},
            {id: '12', name: "Art", age: 263}
        ],
        showPersons: false,
        otherState: 'Some string'
    };

    switchNameHandler = (newName) => {
        //  DON"T DO this.state.persons[0].name = 'Max name changed'
        this.setState(
            {
                persons: [
                    {id: '123', name: newName, age: 5000},
                    {id: '12', name: "Art", age: 263}
                ]
            }
        );
    };

    nameChangedHandler = (event, personId) => {
        const personIndex = this.state.persons.findIndex(pers => {
            return pers.id === personId;
        });
        const person = {...this.state.persons[personIndex]}; // copy/clone
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState(
            {
                persons: persons
            }
        );
    };

    togglePersonsHandler = () => {
        this.setState(
            {
                showPersons: !this.state.showPersons
            }
        );
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons; // not use cause it is connected by reference
        // const persons = this.state.persons.slice(); // use like this
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState(
            {
                persons: persons
            }
        );
    };

    render() {
        console.log('App.js in render');
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                    />
                </div>
            );
        }

        return (
            <div className="App">
                <button onClick={() => {this.setState({showPersons: true})}}>Always make visible</button>
                <Cockpit
                    title={this.props.title}
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    switchNameClicked={this.switchNameHandler}
                    toggleClicked={this.togglePersonsHandler}
                />
                {persons}
            </div>
        );
    }
}

App.propTypes = {
    title: PropTypes.string.isRequired
};

export default App;
