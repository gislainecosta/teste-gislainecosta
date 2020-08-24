import React from 'react';
import './App.css';

import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';

function App() {
  return (
    <div id="app">
      
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />

      <section id="footer">
        <p>LOREM IPSUM</p>
      </section>

    </div>
  );
}

export default App;
