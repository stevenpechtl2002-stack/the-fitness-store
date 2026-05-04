import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Bestsellers from './components/Bestsellers'
import About from './components/About'
import Reviews from './components/Reviews'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#080808] min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <Bestsellers />
      <About />
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  )
}
