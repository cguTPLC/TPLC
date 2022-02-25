import './App.css';
import Bar from './components/bar.js'
import Content from './components/content.js'
import Notsuport from './Notsuport.js'
import { BrowserRouter as Router} from 'react-router-dom'
//import Background from './bg.js'

function App() {
  return (
    window.screen.width > 1000 ? <div className="app">
      <Router>
        <Bar/>
        <Content/>
      </Router>
    </div> : <Notsuport/>
  );
}

export default App; 
