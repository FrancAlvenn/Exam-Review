import React, {useState} from 'react'

function UpdateObjects(){

    const [car, setCar] = useState({year: 2024, 
                                    make: "Ford", 
                                    model: "Mustang"})

        function handleYearChange(event){
            // ...car - spread operator, spreads the object and update year only
            //setCar({...car, year: event.target.value})

            //updater function for safe updates
            setCar(prevCar => ({...prevCar, year: event.target.value}))
        }

        function handleMakeChange(event){
            setCar(prevCar => ({...prevCar, make: event.target.value}))
        }

        function handleModelChange(event){
            setCar(prevCar => ({...prevCar, model: event.target.value}))
        }

    return(
        <div>
            <p>Your Favorite Car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange}/><br/>
            <input type="text" value={car.make} onChange={handleMakeChange}/> <br/>
            <input type="text" value={car.model} onChange={handleModelChange}/> <br/>
        </div>
    );
    
}

export default UpdateObjects;