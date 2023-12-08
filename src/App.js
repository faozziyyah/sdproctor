import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Auth } from './components/Auth';
import { Identity } from './components/Identity';
import { Login } from './components/Login';
import { Register } from './components/Signup';
import { Upload } from './components/Upload';
import { Verify } from './components/Verify';
import { Home } from './components/home/Home';
import { Exam } from './components/user/Exam';
import { Aside } from './components/admin/Aside';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/authentication' element={<Auth />} />
        <Route path='/identification' element={<Identity />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/exam' element={<Exam />} />
        <Route path='/admin' element={<Aside />} />
      </Routes>
    </>
  );
}

export default App;
