import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import Welcome from './pages/Welcome';
import Chat from './pages/Chat';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/" element={<Chat />} />
        {/* <Route path="/weather" element={<Calc />} /> */}
        {/* <Route path="/calc" element={<Calc />} /> */}
        {/* <Route path="/notes" element={<Notes />} /> */}
      </Routes>
    </Router>
  );
}
