import logo from './agc.png';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './components/About.js';
import Contact from './components/Contact.js';
import Home from './components/Home.js'

function App() {
  return (
   <BrowserRouter>
   <div className="App"> 
      <header className="App-header">
        <h1 className="header-title">
          <img src={logo} alt="logo"/>
          ANGELO'S GARDEN CENTER
        </h1>
        <div class="header-div">
          <p>Celebrating 50 Years of Business!</p>
          <strong><u><p>We are now closed on Sundays</p></u></strong>
        </div>
    </header>
    <main class="main">
      <hr></hr>

    
      <nav class="main-nav">
          <a href="/">Home</a>
          <a href="/About">About</a>
          <a href="/Contact">Contact</a>
      </nav>
      <hr></hr>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      
      
      
      </main>
   
      <footer>
        <div class="footer">
          <p>Proudly Serving<br></br> The Greater Toronto Area for 50 years!</p>
          <p>Monday-Friday: 7am - 5pm<br></br> Saturday: 7am - 4pm<br></br> Sunday: 8am - 4pm<br></br> Closed all holidays<br></br> Hours vary depending on season</p>
          <p>1801 Highway 7 West<br></br> Vaughan<br></br> Ontario<br></br> L4K 1v4<br></br> Tel: (905) 669-9220<br></br>angelo7@rogers.com</p>
        </div>
        <p>© 2024 Angelo's Garden Center. All rights reserved.</p>
      </footer> 
    </div>
    </BrowserRouter> 

  );
}

export default App;
