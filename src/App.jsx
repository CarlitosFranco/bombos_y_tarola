import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
import Catalogo from './components/Catalogo';
import Multimedia from './components/Multimedia';
import Footer from './components/Footer';
import './style/style.css';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <Banner />
        <Catalogo />
        <Multimedia />
      </main>
      <Footer />
    </>
  );
}

export default App;
