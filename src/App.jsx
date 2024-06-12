import { Navbar, Brand, CTA } from './components/index';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers/index';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>

    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
