import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreateProject from "./pages/CreateProject";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-project" element={<CreateProject />} />
      </Routes>
    </div>
  );
}

export default App;
