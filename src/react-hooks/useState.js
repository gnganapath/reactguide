import React, {useState} from 'react';

const UseStateHook = () =>{

    const[day, setDay] = useState('Wednesday');

    return (
        <>
            <h6> useState hook</h6>
            use state variable value : {day}
        </>
    )
}

export default UseStateHook;