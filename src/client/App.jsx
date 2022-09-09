import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import MoviePage from './pages/MoviePage';

const apiUrl = 'http://localhost:4000';

function App() {

  return (
    <div className="App">
      <button onClick={() => {localStorage.clear()}}>CLEAR LOCALSTORAGE</button>

      <h1>
        <Link to={"/"}>Home</Link>  
      </h1>
     

      <Routes>
        <Route path="/user/register" element={<RegisterPage apiUrl={apiUrl} />} />
        <Route path="/user/login" element={<LoginPage apiUrl={apiUrl} />} />
        <Route path="/movie" element={<MoviePage apiUrl={apiUrl} />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;