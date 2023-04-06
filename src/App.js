import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
