import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/features/Header'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Service from './pages/service/Service'
import Listing from './pages/listing/Listing'
import Contact from './pages/contact/Contact'



function App() {


  return (


    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/services" element={<Service />} />
      </Routes>
      <Routes>
        <Route path="/listing" element={<Listing />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App
