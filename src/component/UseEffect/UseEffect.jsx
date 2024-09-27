import React, {useState,useEffect} from 'react';

function UseEffect(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(()=> {
        document.title = `Count: ${count} ${color}`

        return() => {
            //Some Cleanup Code
        }

    }, [count,color]);

    function handleAddCount(){
        setCount(prevCount => (prevCount + 1));
    } 

    function handleSubtractCount(){
        setCount(prevCount => (prevCount - 1));
    }

    function handleChangeColor(){
        setColor(prevColor => prevColor === 'green' ? 'red' : 'green');
    }

    return(
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={handleAddCount}>Add</button>
            <button onClick={handleSubtractCount}>Subtract</button>
            <br />
            <button onClick={handleChangeColor}>Change Color</button>
        </div>
    );

}

export default UseEffect;