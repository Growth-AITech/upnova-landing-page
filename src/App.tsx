import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import ValueProposition from './pages/ValueProposition'
//import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-darker-bg">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propuesta-valor" element={<ValueProposition />} />
        </Routes>
        <Footer />
        {/* <WhatsAppFloat /> */}
      </div>
    </Router>
  )
}

export default App
