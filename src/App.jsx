import React from 'react';
import Destinations from './components/Destinations/Destinations';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';

const App = () => {
  return (
    <div>
      {/* <ScrollToTop />
      <Navbar />
      <Home />
      <Services />
      <Destinations />
      <Offer />
      <Tours />
      <Testimonial />
      <DownloadApp />
      <Footer /> */}
      <Navbar />
      <Home />
      <Services />
      <Destinations />
    </div>
  )
};

export default App;