import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Button } from 'antd'; // Asegúrate de importar Button de Ant Design si aún no lo has hecho
import DutyList from './components/DutyList';
import ModifyDutyForm from './components/ModifyDutyForm';
import NewDutyForm from './components/NewDutyForm';


function App() {
  // Estilos CSS para el contenedor de los botones
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px', // Espaciado entre los botones
    marginBottom: '20px', // Espaciado debajo del nav
  };
  return (
    <Router>
      <div>
        <nav style={navStyle}>
          <ul>
            <li>
              <Button type="primary">
                <Link to="/get-duties">Show Duties</Link>
              </Button>
            </li>
            <br></br>
            <li>
              {/* Botón para ir a crear un nuevo deber */}
              <Button type="primary">
                <Link to="/new-duty">Create New Duty</Link>
              </Button>
            </li>
            <br></br>
              <Button type="primary">
                <Link to="/modify-duty/:dutyId">Modify Duty</Link>
              </Button>
          </ul>
        </nav>

        <Routes>
          <Route path="/get-duties" element={<DutyList />} />
          <Route path="/new-duty" element={<NewDutyForm />} />
          <Route path="/modify-duty/:dutyId" element={<ModifyDutyForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
