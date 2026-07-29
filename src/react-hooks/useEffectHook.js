import React, { useState, useEffect } from 'react';

const UseEffectHook = ()=>{

    const[count, setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count) => count +1)
        },1000)
    });                 // },[]) - 0 to 1 , // },[count] - this case it gets value as every second

    return ( 
        <>
            <h6> UseEffectHook </h6>
            count value : {count}
        </>
    )
}

export default UseEffectHook;