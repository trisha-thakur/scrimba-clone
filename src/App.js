import './App.css';
import Home from './home';
import Navbar from './navbar';
import Footer from './footer';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <div className='Content'>
        <Home/>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    

    
    </div>
    
  );
}

export default App;
