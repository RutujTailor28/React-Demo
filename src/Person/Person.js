import   React from 'react'
import './Person.css'
export const Person = (props) => {
    return (
            <div className="dash__card">
                    <p onClick={props.click}>Hey Person i am with someone who counting on me is {props.name} and his age
                        is {props.age}</p>
                    <p>{props.children}</p>
                    <input type='text' onChange={props.change} />
            </div>

    );
}

