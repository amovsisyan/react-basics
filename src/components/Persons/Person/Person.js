import React, {Component} from 'react';
import './Person.css';
import WithClassWrapper from '../../../hoc/WithClassWrapper'

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('Person.js Constructor', props);
    }

    componentWillMount() {
        console.log('Person.js WillMount');
    }

    componentDidMount() {
        console.log('Person.js DidMount');
    }

    render() {
        console.log('Person.js in render');

        return (
            <WithClassWrapper className={'Person'}>
                <p onClick={this.props.click}>I am {this.props.name}! And I am {this.props.age} age old!</p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.inputChange}
                    value={this.props.name}
                />
            </WithClassWrapper>
        )
    }
}


export default Person;