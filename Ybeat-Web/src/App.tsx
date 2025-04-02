import { useState } from 'react';
import './App.css'
import Download from './components/Download'
import Header from './components/Header'
import Navigation from './components/Navigation'
import { NavStateEnum } from './enums/nav-state.enum';
import Home from './components/Home';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  const [navState, setNavState] = useState(NavStateEnum.HOME);

  return (
    <div className='app-container'>
      <Header/>
      <Navigation onNavClick={setNavState}/>
      <main className="main-container ml-60 p-4">
        {navState === NavStateEnum.DOWNLOAD && <Download />}
        {navState === NavStateEnum.HOME && <Home />}
        {navState === NavStateEnum.TEAM && <Team />}
        {navState === NavStateEnum.CONTACT && <Contact />}
      </main>
    </div>
  )
}

export default App
