import './index.css'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Bestsellers from './components/Bestsellers'
import About from './components/About'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#080808] min-h-screen">
      <Cursor />
      <Navbar />
      <Hero />
      <Categories />
      <Bestsellers />
      <About />
      <Reviews />
      <Location />
      <Footer />
    </div>
  )
}
