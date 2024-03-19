import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DutyList from './components/DutyList';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DutyList />} />
      </Routes>
    </Router>
  );
}

export default App;
