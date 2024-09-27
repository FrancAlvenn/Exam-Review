import React, {useState} from "react"

function UseStateComponent () {

    //useState declaration
    //the constant has 2  values `name` and the setter (usually the `name` with set before it - eg. setName)
    //the setter is a function
    //we use array destructuring when initializing the array of the useState
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    //when the setter is called it would trigger a rerender of the Virtual DOM, normal variables don't
    const updateName = () => {
        setName("Spongebob");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () =>{
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    );
}


export default UseStateComponent;