import './App.css';
import {usernameContext} from '../src/context/context'
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import { useState } from 'react';
function App() {
  const [username, setUsername] = useState('hard-coded name');
  return (
    <div className="App">
      <header className="App-header">
        <usernameContext.Provider value={{username, setUsername}}>
          <Dashboard />
          <Home />
        </usernameContext.Provider>
      </header>
    </div>
  );
}

export default App;
