import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Breakfast from './components/Breakfast/Breakfast';
import Dinner from './components/Dinner/Dinner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Lunch from './components/Lunch/Lunch';
import Main from './components/Main/Main';

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Main></Main>
      <Routes>
        <Route path="/" element={<Breakfast></Breakfast>}></Route>
        <Route path="/lunch" element={<Lunch></Lunch>}></Route>
        <Route path="/dinner" element={<Dinner></Dinner>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
