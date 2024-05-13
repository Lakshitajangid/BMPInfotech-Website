
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Footer from './Components/Footer';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Afterabout1 from './Components/Afterabout1';
import Afterabout2 from './Components/Afterabout2';
import Map from './Components/Map';
import Faq from './Components/Faq';
import Joinnews from './Components/Joinnews';

import {Services} from './Components/Services';
import Portfolio from './Components/Portfolio';


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Afterabout1/>
      <Afterabout2/>
      <Team/>
      <Faq/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Map/>
      <Joinnews/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
