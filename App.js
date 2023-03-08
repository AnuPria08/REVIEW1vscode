import React from 'react'
// import Hello from'./over';
// import Card from './button';
// import UpdatedComponent from './update';
// import './style.css';

// import Font from './HOC/Fontpage';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Delete from './deletee';
import Show from './gett';
import Navi from './home1111';
import Register from './posts';
import Update from './update';

// import ResponsiveAppBar from './components/fetch.js';
function App(){
 return(
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={< Navi/>} />
        {/* <Route path='/main' element={< Navi/>} /> */}
      <Route path='Font' element={<Register/>}/>
      <Route path='Get' element={<Show/>}/>
        <Route path='Delete' element={<Delete />} />
        <Route path='Update' element={<Update />} />
      </Routes>
    </Router>
  </div>
 );
}
export default App;