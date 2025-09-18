import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
//import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-vireo-deep-night">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/propuesta-valor" element={<ValueProposition />} />
          <Route path="/real-estate" element={<RealEstate />} /> */}
        </Routes>
        <Footer />
        {/* <WhatsAppFloat /> */}
      </div>
    </Router>
  )
}

export default App
