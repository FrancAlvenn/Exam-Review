import './DynamicList.css';
import PropTypes from 'prop-types';

function List(props){


    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                           {item.name}: &nbsp;
                                           {item.calories}</li>);


    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>

    );

}

List.propTypes = {
    category : PropTypes.string,
    items : PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
}

List.defaultProps ={
    category : "Category",
    items: []
}

export default List;









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