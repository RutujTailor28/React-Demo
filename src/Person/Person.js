import   React from 'react'
export const Person = (props) => {
    return (
        <div>
            <p onClick={props.click}>Hey Person i am with someone who counting on me is {props.name} and his age is {props.age}</p>
            <p>{props.children}</p>
        </div>
    );
}

