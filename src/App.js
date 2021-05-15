import React from "react";
import {  BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";

import Layout from './components/layout/layout';
import Navigation from './components/navigation/navigation';
import Surface from './components/surfaces/surface';
import Feedback from './components/feedback/Feedback';
import Datadisplay from './components/datadisplay/datadisplay';
import Utils from './components/utils/Utils';
import Labs from './components/lab/Lab';

const routes = [
  {
    path: "/layout",
    component: Layout
  },
  {
    path: "/input",
    component: inputs,
    routes: [
      {
        path: "/input/bus",
        component: Bus
      },
      {
        path: "/input/cart",
        component: Cart
      }
    ]
  }, 
  {
    path: "/input/cart",
    component: Cart
  },
  {
    path: "/input/cart",
    component: Cart
  },
  {
    path: "/navigation",
    component: Navigation
  },
  {
    path: "/surface",
    component: Surface
  },
  {
    path: "/feedback",
    component: Feedback
  },
  {
    path: "/datadisplay",
    component: Datadisplay
  },
  {
    path: "/utils",
    component: Utils
  },
  {
    path: "/labs",
    component: Labs
  },
];

export default function RouteConfigExample() {
  return (
    <Router>
      <div>
        <ul>
        <li>
            <Link to="/layout">1.Layout</Link>
          </li>

          <li>
            <Link to="/input">2.inputs</Link>
          </li>
          <li>
            <Link to="/input/bus">2.1.inputs -> bus</Link>
          </li>
          <li>
            <Link to="/input/cart">2.2.inputs -> cart</Link>
          </li>
          <li>
            <Link to="/navigation">3.Navigation</Link>
          </li>
          <li>
            <Link to="/surface">3.Surface</Link>
          </li>
          <li>
            <Link to="/feedback">4.Feeback</Link>
          </li>
          <li>
            <Link to="/datadisplay">5.Data dispay</Link>
          </li>
          <li>
            <Link to="/utils">6.Utils</Link>
          </li>
          <li>
            <Link to="/labs">7.Labs</Link>
          </li>
        </ul>

        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}


function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function Sandwiches() {
  return <h2>Sandwiches</h2>;
}

function inputs({ routes }) {
  return (
    <div>
      <h2>inputs</h2>
      <ul>
        <li>
          <Link to="/input/bus">Bus</Link>
        </li>
        <li>
          <Link to="/input/cart">Cart</Link>
        </li>
      </ul>

      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}

function Bus() {
  return <h3>Bus</h3>;
}

function Cart() {
  return <h3>Cart</h3>;
}
