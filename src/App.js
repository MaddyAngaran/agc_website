import logo from './imgs/agc.png';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.css'; 

import About from './components/About.js';
import Contact from './components/Contact.js';
import Home from './components/Home.js';
import Perennials from './components/Perennials.js';
import Annuals from './components/Annuals.js';
import Trees from './components/Trees.js';
import Shrubs from './components/Shrubs.js';



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
          

          <DropdownButton class="drop" id="dropdown-basic-button" title="Plants">
              <Dropdown.Item href="/Perennials">Perennials</Dropdown.Item>
              <Dropdown.Item href="Annuals">Annuals</Dropdown.Item>
              <Dropdown.Item href="Trees">Trees</Dropdown.Item>
              <Dropdown.Item href="Shrubs">Shrubs</Dropdown.Item>
          </DropdownButton>

         <a href="/About">About</a>
          <a href="/Contact">Contact</a>
      </nav>

      <hr></hr>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Perennials" element={<Perennials />} />
        <Route path="/Annuals" element={<Annuals />} />
        <Route path="/Trees" element={<Trees />} />
        <Route path="/Shrubs" element={<Shrubs />} />
      </Routes>
      
      </main>
   
      <footer>
        <div class="footer">
          <p>Proudly Serving<br></br> The Greater Toronto Area for 50 years!</p>
          <p>Monday-Friday: 7am - 5pm<br></br> Saturday: 7am - 4pm<br></br> Sunday: CLOSED<br></br> Closed all holidays<br></br> Hours vary depending on season</p>
          <p>1801 Highway 7 West<br></br> Vaughan<br></br> Ontario<br></br> L4K 1v4<br></br> Tel: (905) 669-9220<br></br>angelo7@rogers.com</p>
        </div>
        <p>© 2024 Angelo's Garden Center. All rights reserved.</p>
      </footer> 
    </div>
    </BrowserRouter> 

  );
}

export default App;
