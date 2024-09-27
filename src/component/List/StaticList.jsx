function List(){

    const fruits = [{id: 1, name: "apple", calories: 95},
                    {id: 2, name: "banana" , calories: 105},
                    {id: 3, name: "orange" , calories: 45}];

    //SORTING LISTS

    //Lexicographical Sort
    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL

    //Numeric Sort
    // fruits.sort((a,b) => a.calories - b.calories); //NUMERIC (smallest to biggest)
    // fruits.sort((a,b) => b.calories - a.calories); //NUMERIC (biggest to smallest)

    //Low Calories Fruits
    // const lowCaloriesFruits = fruits.filter(fruit => fruit.calories < 100);

    //High Calories Fruits
    // const highCaloriesFruits = fruits.filter(fruit => fruit.calories > 100);


    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                           {fruit.name}: &nbsp;
                                           {fruit.calories}</li>);

    return(
        <ol>
            {listItems}
        </ol>

    );

}

export default List;