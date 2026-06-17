
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FindMatchNow from './components/FindMatchNow';
import HowItWorks from './components/HowItWorks';
import TrendingProfiles from './components/TrendingProfiles';
import CustomersHowToSay from './components/CustomersHowToSay';
import Footer from './components/Footer';

function App() {
  return (

    <div className="min-h-screen font-sans bg-bgLight">
      
      <Navbar />

      <main>
        <Hero />
        <FindMatchNow />
         <HowItWorks />
         <TrendingProfiles />
         <CustomersHowToSay />
      </main>
      <Footer />
    </div>
  )
}

export default App;
