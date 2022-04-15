import { Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Routes></Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
