import React from 'react';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';


function RouterPage() {
  return (
    <div>
        <Router>
            <Routes>
              <Route path="/" element={<Home />} exact/>
              <Route path="/Login" element={<Login />} exact/>
              <Route path="/SignUp" element={<SignUp />} exact/>
              <Route path="/dashboard" element={<Dashboard />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default RouterPage;

