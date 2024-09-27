import './CounterApp.css'
import React, {useState} from 'react';

function CounterApp(){

    const [count, setCount] = useState(0);

    //NORMAL COUNTER APP

    // const increment = () => {
    //     setCount(count + 1);
    // }

    // const decrement = () => {
    //     setCount(count - 1);
    // }

    // const reset = () => {
    //     setCount(0)
    // }

    //UPDATER FUNCTION COUNTER APP
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    }

    const reset = () => {
        setCount(0)
    }

    return(
        <div className='counter-container'>
            <p className='count-display'>{count}</p>
            <button className='counter-button' onClick={decrement}>Decrement</button>
            <button className='counter-button' onClick={reset}>Reset</button>
            <button className='counter-button' onClick={increment}>Increment</button>
        </div>
    );

}


export default CounterApp