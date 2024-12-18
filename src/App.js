
import './App.css';
import backgroundImage from './images/bg-pattern-desktop.svg'
import rightsideImage from './images/hero-desktop.jpg'
import iconarrow from './images/icon-arrow.svg'
import logo from './images/logo.svg'

function App() {
  console.log(rightsideImage)
  return( 
    <div className="App " >
      <div className="container" style={{backgroundImage: `url(${backgroundImage}) `}}>
      <div className="left">
      <img src={logo} alt="Placeholder" />
        <h1>We're coming soon</h1>
        <p> Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
       <div> <input placeholder='Email Address'></input> 
        <img src={iconarrow} alt="Placeholder" />
      </div>
  </div>
      <div className="right">
        <img src={rightsideImage} alt="Placeholder" />
      </div>
    </div>
    </div>
  );
}

export default App;
