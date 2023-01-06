import './App.css';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />  
      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/all' element={<AllUsers/>} />
      <Route path='/add' element={<AddUser />} />
      <Route path='/edit/:id' element={<EditUser />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
