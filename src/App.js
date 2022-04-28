//import logo from './logo.svg';
import '../src/styles/App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
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
