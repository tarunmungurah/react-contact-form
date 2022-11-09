
import './App.css';
import Header from './Components/Header';
import RouteFormation from './Route';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return  (
    <div className='App'>
      <BrowserRouter> 
        <Header />
        <RouteFormation />
      </BrowserRouter>
     </div>  
  );
}

export default App;
