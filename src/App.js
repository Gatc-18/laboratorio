import logo from './logo.svg';
import './App.css';
import moment from 'moment';

function App() {
  const fecha = moment().format('MMMM Do YYYY, h:mm:ss a'); 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {fecha}
        </p>
      </header>
    </div>
  );
}

export default App;
