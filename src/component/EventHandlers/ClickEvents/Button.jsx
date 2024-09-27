function Button() {

    let count = 0;

    //Arrow Functions for a callback function
    const handleClick = () => {
        console.log("Ouch!")
    }

    //With Parameters - in order to not call the function immediately after running the app
    //Use an arrow function  "() => handleClick2("Franc")"
    //Without the arrow function the handleClick2 would immediately be run even without clicking the button
    const handleClick2 = (name) => {
        console.log(`${name} stop clicking me!`)
    }

    //With Conditions - in this case the count is taking into consideration is count < 3 add 1 to count and display text else display a different text
    const handleClick3 = (name) => {
        if (count < 3){
            count ++;
            console.log(`${name} you clicked me ${count} time/s!`);
        }else{
            console.log(`${name} stop clicking me!`)
        }
    }

    //With EVENT PARAMETER - this is an object that describes the event that occurred
    //Usually `event` is shortened to just `e`
    //You can manipulate the target of the event much like in the code below
    //<button onClick={(event) => handleClick4(event)}>Click Me!</button>  -- this the event call (event) => handleClick4(event)
    const handleClick4 = (event) => {
        event.target.textContent = "Hello";
    }

    return(
        <>
            <button onClick={(event) => handleClick4(event)}>Click Me!</button>
        </>

    );
}

//There are many events that can be handled onClick is just one of them is pretty common for event and would be the most used one.
//And it doesn't have to be a button, it can be any html tag that can handle an event
export default Button;