import React, {Component} from 'react';
import './App.css';
import {Button} from 'reactstrap';

import {Person} from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value',
        personShow: false
    }


    switchNameHandler = (newName) => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: 'RICk', age: 29},
                {name: 'WASSUP', age: 27}
            ]
        })
    }
    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: event.target.value, age: 28},
                {name: 'RUTUJ', age: 29},
                {name: 'HEY', age: 27}
            ]
        })
    }
    toggleListHandler = () => {
        const doesShow = this.state.personShow;
        this.setState({personShow: !doesShow});
    }
    deleteHandler = (indexOfPerson) => {
        const persons = this.state.persons;
        persons.splice(indexOfPerson, 1);
        this.setState({persons: persons});
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            borderRadius: '6px',
            boxShadow: '0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)',
            padding: '8px',
            cursor: 'pointer'
        }
        let person = null;
        if (this.state.personShow) {
            person = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person
                                age={person.age}
                                name={person.name}
                                key={"person"+index}
                                click={() => this.deleteHandler(index)}
                            />
                        })
                    }
                </div>
            );
        }

        return (
            <div className="App">

                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <Button style={style} onClick={this.toggleListHandler}>Switch Name</Button>
                {person}

            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;