import logo from './agc.png';
import nonno from './nonno.jpeg';
import './App.css';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <h1 className="header-title">
          <img src={logo} alt="logo"/>
          ANGELO'S GARDEN CENTER
        </h1>
        <div class="header-div">
          <p>Celebrating 50 Years of Business!</p>
          <strong><u><p>OPEN SUNDAYS!</p></u></strong>
        </div>
    </header>
    <main class="main">
      <hr></hr>
      <nav class="main-nav">
          <a href="./App.js">Home</a>
          <a href="./About.js">About</a>
          <a href="./Contact.js">Contact</a>
      </nav>
      <hr></hr>
      <img src={nonno}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
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

  );
}

export default App;
