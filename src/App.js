import './App.css';
import Login from './Components/Login';
import { Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import Dashboard from './Components/Dashboard';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
