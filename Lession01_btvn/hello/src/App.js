import logo from './logo.svg';
import './App.css';
import InFoDetail from './components/InFoDetail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <hr/>
        <img src="https://tse1.mm.bing.net/th?id=OIP.GvNakgya1kk5A6CFQM6Z4gHaHZ&pid=Api&P=0&h=220" />
        <h2>Vũ Hương Giang</h2>
      </header>
      <InFoDetail name="Vũ Hương Giang" age="20" address="Hà Nội"/>
    </div>
  );
}

export default App;
