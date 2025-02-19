import './App.css'
import Header from './components/Header'
import Navigation from './components/navigation'

function App() {
  return (
    <div className='App'>
      <Header/>
      <Navigation/>
      <main className="ml-60 pt-16 p-4">
        <p>Contenu du site</p>
      </main>
    </div>
  )
}

export default App
