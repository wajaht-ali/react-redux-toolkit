import './App.css';
import Home from './Home';

function App() {

  //value using props
  const value = 20;
  return (
    <div >
      <Home value={value}/>
    </div>
  );
}

export default App;
