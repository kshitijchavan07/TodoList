import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Appbar from './components/Appbar';
import Todos1 from './components/Todos1';

function App() {
  return (
    <>
    <BrowserRouter>
      <Appbar/>
      <Routes>
        <Route path='/' element={<Todos/>}/>
        <Route path='/todos1' element={<Todos1/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
