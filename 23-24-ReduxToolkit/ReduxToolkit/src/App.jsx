import Dashboard from './components/Dashboard/Dashboard';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/Dashboard/LoginForm/LoginForm';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LoginForm />}></Route>
          <Route path='/Dashboard' element={<Dashboard />}></Route>
        </Routes>
      </Router>


    </div>
  );
}

export default App;