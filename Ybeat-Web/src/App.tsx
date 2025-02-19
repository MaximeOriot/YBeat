import { useState } from 'react';
import './App.css'
import Download from './components/Download'
import Header from './components/Header'
import Navigation from './components/Navigation'
import { NavStateEnum } from './enums/nav-state.enum';
import Home from './components/Home';

function App() {
  const [navState, setNavState] = useState(NavStateEnum.HOME);

  return (
    <div className='App'>
      <Header/>
      <Navigation onNavClick={setNavState}/>
      <main className="ml-60 overflow-y-auto p-4">
        {navState === NavStateEnum.DOWNLOAD && <Download />}
        {navState === NavStateEnum.HOME && <Home />}
      </main>
    </div>
  )
}

export default App
