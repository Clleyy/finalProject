import React from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Experience />
      <Education />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
