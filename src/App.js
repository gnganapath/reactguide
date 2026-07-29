import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import UncontrolledComponentForm from './form-components/uncontrolledForm';
import ReactHookForm from './form-components/react-hook-form-component';
import FormikComponent from './form-components/formik-component';
import Header from './layout-components/Header';
import NavBar from './layout-components/NavBar';

import UseStateHook from './react-hooks/useState';
import UseEffectHook from './react-hooks/useEffectHook';
import UseContextHookComponent from './react-hooks/useContextHook';

import "./style.css";

export default function App() {

 return(
   
     <div>
          <Header/>
          {/*<NavBar />*/}
         
     <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/uncontrol">Uncontrolled component </Link>
              </li>
              <li>
                <Link to="/reactHookForm">React Hook form - npm </Link>
              </li>
              <li>
                <Link to="/formik">Formik Components - npm </Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/'></Route>
                 <Route exact path='/uncontrol' element={< UncontrolledComponentForm />}></Route>
                 <Route exact path='/reactHookForm' element={< ReactHookForm />}></Route>
                 <Route exact path='/formik' element={< ReactHookForm />}></Route>
          </Routes>
          </div>
       </Router>
        <UseStateHook />
        <hr />
        <UseEffectHook />
        <hr />
        {/*<UseContextHookComponent />*/}
    </div>
  
 )
}