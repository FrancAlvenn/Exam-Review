import './Student.css'
import PropTypes from 'prop-types'

function Student(props){

    return(
        <div>
            <h1>Name: {props.name}</h1>
            <h3>Age: {props.age}</h3>
            <h3>Student: {props.isStudent ? "Yes" : "No"}</h3>
        </div>
    );
}

//Prop Types
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}


//Default Props
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Student