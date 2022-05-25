//import logo from './logo.svg';
import '../src/styles/App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
// import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header>
        <Nav className="App-header" />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
