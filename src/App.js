import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
import Button from './Button';

function App() {
  return (
       <div className="App">
            <Header />
            <Sidebar />
            <Body /> 
             <Footer />  
        </div>
 
  );
    
    
}

export default App;
