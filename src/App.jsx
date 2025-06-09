import Header from './components/Header';
import Contributions from './components/Contributions';
import Testimonials from './components/Testimonials';
import Initiatives from './components/Initiatives';
import Departments from './components/Departments';
import Collaborations from './components/Collaborations';
import Footer from './components/Footer';
import AboutNSS from './components/AboutNSS';
import MottoNSS from './components/MotoNSS';


function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen w-full">
      <Header />
      <div className="space-y-10">
        <MottoNSS />
        <AboutNSS /><br />
        <Contributions />
        <Testimonials />
        <Initiatives />
        <Departments />
        <Collaborations />
        <Footer />
      </div>
    </div>
  );
}

export default App;