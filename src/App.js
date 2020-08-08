import React from 'react';
import './App.css';
import Header from './Header';
import CustomExample from './CustomExample';
import EffectExample from './EffectExample';
import RefExample from './RefExample';
import LayoutEffectExample from './LayoutEffectExample';
import KeyExample from './KeyExample';
import UseLinkExample from './UseLinkExample';

function App() {
  return (
    <>
      <Header />
      <div className="row p-lg f-j-start">
        <UseLinkExample />
      </div>
      <div className="row p-lg f-j-start">
        <KeyExample />
      </div>
      <div className="row p-lg f-j-start">
        <LayoutEffectExample />
      </div>
      <div className="row p-lg f-j-start">
        <RefExample />
      </div>
      <div className="row p-lg f-j-start">
        <EffectExample />
      </div>
      <div className="row f-j-start">
        <CustomExample />
      </div>
    </>
  );
}

export default App;
