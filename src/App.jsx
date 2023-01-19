import React from 'react';
import Destinations from './components/Destinations/Destinations';
import DownloadApp from './components/DownloadApp/DownloadApp';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Offer from './components/Offer/Offer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';
import Tours from './components/Tours/Tours';

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Home />
      <Services />
      <Destinations />
      <Offer />
      <Tours />
      <Testimonial />
      <DownloadApp />
    </div>
  )
};

export default App;