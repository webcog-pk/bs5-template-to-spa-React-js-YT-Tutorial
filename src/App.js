import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Browse from './Components/Browse';
import Detail from './Components/Detail';
import Streams from './Components/Streams';
import Profile from './Components/Profile';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    
    <Header/>
    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/browse' element={ <Browse/>} />
      <Route path='/detail' element={  <Detail/>} />
      <Route path='/streams' element={<Streams/>} />
      <Route path='/profile' element={ <Profile/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
