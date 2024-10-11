import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components-pages/HomePage';
import DevelopersPage from './components-pages/DevelopersPage';

function App() {
  return (
    <BrowserRouter basename='/mesajla'>
      <div className="App">
        <NavBar />
        <div id='page-body'>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/developers' element={<DevelopersPage />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
