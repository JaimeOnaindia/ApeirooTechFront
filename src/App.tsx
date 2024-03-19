import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DutyList from './components/DutyList';

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
