import { Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Routes></Routes>
    </div>
  );
}

export default App;
