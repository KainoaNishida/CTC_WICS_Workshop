import './App.css';
import Clock from './Clock';
import Counter from './Counter';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/clock" element={<Clock />} />
        </Routes>
    </Router>
  );
}

export default App;
