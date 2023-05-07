import { Route, Routes } from 'react-router';
import './App.css';
import { Login } from './pages/login';
import { Landing } from './pages/landing';
import { Users } from './pages/users';
import { UserDetails } from './pages/userDetails';
import { useState } from 'react';


function App() {
  
  const [list, setList] = useState([{ name: 'name1', surname: 'surname1', email: 'email@1', id: '1' },
  { name: 'name2', surname: 'surname2', email: 'email@2', id: '2' },
  { name: 'name3', surname: 'surname3', email: 'email@3', id: '3' },
  { name: 'name4', surname: 'surname4', email: 'email@4', id: '4' },
  { name: 'name5', surname: 'surname5', email: 'email@5', id: '5' },
  { name: 'name6', surname: 'surname6', email: 'email@6', id: '6' },
  { name: 'name7', surname: 'surname7', email: 'email@7', id: '7' },
  { name: 'name8', surname: 'surname8', email: 'email@8', id: '8' }]);
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Landing />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/users'} element={<Users />} />
        <Route path={'/user-details/:id'} element={<UserDetails list={list}/>} />
      </Routes>
    </>
  );
}

export default App;
