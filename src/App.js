import React, {Component} from 'react';
import CSSClasses from './App.css';
import Person from './Person/Person';
import Radium from 'radium';

class App extends Component {
    state = {
        persons: [
            {id:'123', name: "Max", age: 28},
            {id:'12', name: "Art", age: 263}
        ],
        showPersons: false,
        otherState: 'Some string'
    };

    switchNameHandler = (newName) => {
        //  DON"T DO this.state.persons[0].name = 'Max name changed'
        this.setState(
            {
                persons: [
                    {id:'123', name: newName, age: 5000},
                    {id:'12', name: "Art", age: 263}
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
        const style = {
            backgroundColor: '#ccc',
            padding: '8px',
            ':hover': {backgroundColor: 'lightgreen',}
        };

        let persons = null,
            classes = [];

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((eachPerson, index) => {
                        return <Person
                            name={eachPerson.name}
                            age={eachPerson.age}
                            click={this.deletePersonHandler.bind(this, index)}
                            key={eachPerson.id}
                            inputChange={(event) => this.nameChangedHandler(event, eachPerson.id)}
                            // click={this.switchNameHandler.bind(this, 'Another Maxoooooooo')}
                            // inputChange={this.nameChangedHandler}
                        />
                    })}
                </div>
            );

            style.backgroundColor = '#00FF00';
            style[':hover'] = {
                backgroundColor: 'red'
            }
        }

        if (this.state.persons.length <= 1) {
            classes.push('red');
        }

        if (this.state.persons.length <= 0) {
            classes.push('bold');
        }

        return (
            <div className={CSSClasses.App}>
                <h1 className={classes.join(' ')}>Here</h1>
                <button
                    onClick={() => this.switchNameHandler('Maxoooooooo')}
                >
                    Button
                </button>

                <button
                    onClick={this.togglePersonsHandler.bind(this)}
                    style={style}
                >
                    Toggle Persons
                </button>

                {/*{*/}
                {/*this.state.showPersons ?*/}
                {/*<div>*/}
                {/*<Person*/}
                {/*name={this.state.persons[0].name}*/}
                {/*age={this.state.persons[0].age}*/}
                {/*click={this.switchNameHandler.bind(this, 'Another Maxoooooooo')}*/}
                {/*inputChange={this.nameChangedHandler}*/}
                {/*/>*/}
                {/*<Person*/}
                {/*name={this.state.persons[1].name}*/}
                {/*age={this.state.persons[1].age}>*/}
                {/*Some Info from mother side.*/}
                {/*</Person>*/}
                {/*</div>*/}
                {/*: null*/}
                {/*}*/}

                {persons}
            </div>
        );
    }
}

export default Radium(App);
