import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('Persons.js Constructor', props);
    }

    componentWillMount() {
        console.log('Persons.js WillMount');
    }

    componentDidMount() {
        console.log('Persons.js DidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('Persons.js WillReceiveProps', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('Persons.js shouldComponentUpdate', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons
    //         || nextProps.changed !== this.props.changed
    //         || nextProps.clicked !== this.props.clicked; // will not let to render everything if nothing changed
    //     // return true;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('Persons.js componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('Persons.js componentDidUpdate')
    }

    render() {
        console.log('Persons.js in render');

        return this.props.persons.map((eachPerson, index) => {
            return (
                <Person
                    name={eachPerson.name}
                    age={eachPerson.age}
                    click={() => this.props.clicked(index)}
                    key={eachPerson.id}
                    inputChange={(event) => this.props.changed(event, eachPerson.id)}
                />
            )
        })
    }
}

export default Persons;