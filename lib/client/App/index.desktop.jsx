import React, {useState} from 'react';
    
import Navbar from '../Navbar';

export default () => {
    const [counter, setCounter] = useState(0);
    
    return (<div>
        <Navbar />
        <h1>Hello, world!</h1>
        <div>{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>add</button>
    </div>
    )
};
