import './App.css';

import Navbar from './components/Navbar/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/fileManager">File Manager</Route>
          <Route path="/random">Random</Route>
          <Route path="/">Home</Route>
        </Switch>

      </Router>
      
      
    </div>

  );
}

export default App;