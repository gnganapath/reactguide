import React , {useState,  useContext } from 'react';
import { UserContext } from './userContext';


function UseContextHookComponent(){
    const [user, setUser] = useState('ganapathi');

    return(
        <UserContext.provider value={user}>
            
                <h6> parent component -useContext </h6> 
                <Component2 />
           
        </UserContext.provider>
     )
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  const {user, setUser} = useContext(UserContext)

  return (
    <>
      <h1>Component 4</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

export default UseContextHookComponent;