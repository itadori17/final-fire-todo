import './App.css';
import Welcome from './components/Welcome';
import Homepage from './components/Homepage';
import Register from './components/Register';
import { BrowserRouter as Router,
Routes,
Route

} from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome/>}  />
          <Route path="/homepage" element={<Homepage/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;