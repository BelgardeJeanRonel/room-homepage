import './App.scss';
import { About } from './Components/About/About';
import { Header } from './Components/Header/Header';
import { Slide } from './Components/Slide/Slide';


function App() {


  return (
    
    <div className="App">
      <Header />
      <Slide />
      <About />
    </div>
  );
}

export default App;
