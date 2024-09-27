import './App.css';
import Student from './component/Student/Student';
import UserGreeting from './component/UserGreeting/UserGreeting';
import StaticList from './component/List/StaticList';
import DynamicList from './component/List/DynamicList';
import Button from './component/EventHandlers/ClickEvents/Button';
import Image from './component/EventHandlers/ClickEvents/Image';
import UseStateComponent from './component/States/UseState/UseStateComponent';
import CounterApp from './component/States/UseState/CounterApp';
import OnChange from './component/EventHandlers/OnChange/OnChange';
import ColorPicker from './component/EventHandlers/OnChange/ColorPicker';
import UpdateObjects from './component/Objects/UpdateObjectsInState/UpdateObjects';
import Arrays from './component/Objects/Arrays/Arrays';
import ArrayOfObjects from './component/Objects/ArrayOfObjects/ArrayOfObjects';
import UseEffect from './component/UseEffect/UseEffect';
import UseEffectExample from './component/UseEffect/UseEffectExample';
import ComponentA from './component/UseContext/ComponentA';
import ComponentB from './component/UseContext/ComponentB';
import UseRef from './component/UseRef/UseRef';

function App() {

  const fruits = [{id: 1, name: "apple", calories: 95},
                  {id: 2, name: "banana" , calories: 105},
                  {id: 3, name: "orange" , calories: 45}];

  const vegetables = [{id: 1, name: "potatoes", calories: 110},
  {id: 2, name: "celery" , calories: 15},
  {id: 3, name: "carrots" , calories: 25}];

  return (
    <div className="App">
        {/* <Student name="Franc Alvenn Dela Cruz" age={20} isStudent={true}/>
        <Student></Student>
        <UserGreeting  isLoggedIn = {true} username = {"Franc Alvenn"}/> */}

        {/* <StaticList/> */}

        {/* CONDITIONAL RENDERING FOR LISTS (if list doens) */}
        {/* {fruits.length > 0 && <DynamicList items={fruits} category={"Fruits"}/>}; */}
        {/* {fruits.length > 0 ? <DynamicList items={vegetables} category={"Vegetables"}/> : null}; */}


        {/* BUTTONS - onClick Event Handlers*/}
        {/* <Button /> */}
        {/* <Image /> */}

        {/* <UseStateComponent /> */}

        {/* Click Event -Counter App */}
        {/* <CounterApp /> */}

        {/* On Change Event - Change Name App */}
        {/* <OnChange /> */}


        {/* Color Picker App */}
        {/* <ColorPicker /> */}

        {/* Update Objects in State */}
        {/* <UpdateObjects /> */}

        {/* Update Arrays in State */}
        {/* <Arrays /> */}

        {/* Update Array of Objects in State */}
        {/* <ArrayOfObjects /> */}

        {/* Use Effect and examples -- UseEffect*/} 
        <UseEffect />
        <UseEffectExample />

        {/* Use Context */}
        {/* <ComponentA /> */}

        {/* Use Ref - use reference*/}
        {/* <UseRef /> */}

    </div>
  );
}

export default App;
