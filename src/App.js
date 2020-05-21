import React from 'react';

import s from './App.modules.css';

import Section1 from './components/section_1/Section_1'
import Section2 from './components/section_2/Section_2'
import Section3 from './components/section_3/Section_3'
import Section4 from './components/section_4/Section_4'

function App() {
  return (
    <div className={s.App}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

export default App;
