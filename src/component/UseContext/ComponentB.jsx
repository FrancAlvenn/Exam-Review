import React, { useState, useEffect, useContext } from 'react';
import ComponentC from './ComponentC';

import { UserContext } from './ComponentA';

function ComponentB(){

    const user = useContext(UserContext);

    return(
        <div className='box'>
           <h1>Component B</h1>
           <ComponentC />
        </div>
    );

}

export default ComponentB;