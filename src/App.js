import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Dashboard from './Dash';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Dashhome from './Dashhome';
import AddProduct from './AddProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Login/>}/>
        <Route path="/dash/:name/" element={<Dashboard/>}>
          <Route path='' element={<Dashhome/>}></Route>
          <Route path='add' element={<AddProduct/>}></Route>
        </Route>
        <Route path="/logout" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
