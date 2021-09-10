import React from 'react';
import logo from './logo.svg';
import './App.css';
import JoinUs from './components/JoinUs';
import Settings from './components/Settings';
import Login from './components/Login';
import Search from './components/Search';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Help from './components/Help';
import Download from './components/Download';
import AllInOne from './components/AllInOne';
import MobileOs from './components/MobileOs';

function App() {


  const data = [
    { "title": "Mobile Operating System", "list": ["Android", "Blackberry", "iPhone", "Windows Phone"] },
    { "title": "Mobile Manufacturers", "list": ["Samsung", "HTC", "Micromax", "Apple"] }
  ]


  // const data = ["titlesss"]
  // const data = "titlesss"


  return (
    <div className="App">

      <div className="flex">
        <div>
          <JoinUs />
          <Login />
          <Search />
          <Home />
        </div>
        <div >

          <Settings />
          <ContactUs />
          <Help />
          <Download />
        </div>
      </div>

      <h1>Using single components</h1>

      <div className="flex">
        <div>
          <AllInOne name="JoinUs" color="colorSkyBlue" />
          <AllInOne name="Login" color="orange" />
          <AllInOne name="Search" color="green" />
          <AllInOne name="Home" color="pink" />

        </div>
        <div>
          <AllInOne name="Settings" color="silver" />
          <AllInOne name="Contact US" color="red" />
          <AllInOne name="Help" color="purple" />
          <AllInOne name="Download" color="golden" />

        </div>



      </div>
      <div>

        {/* try{
          <MobileOs data={data} />
        }catch(e){
          console.log("error is :")
        } */}

        <MobileOs data={data} />

      </div>


    </div>
  );
}

export default App;
