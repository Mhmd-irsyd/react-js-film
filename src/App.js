import './App.css';
import NavigationBar from './components/Navigationbar';
import "./style/landingPage.css"
import Intro from "./components/Intro"
import Trending from "./components/Trending"
import Superhero from './components/Superhero';

function App() {
  return (
    <div>
      {/*intro section */}
    <div className='myBG'>
      <NavigationBar />
      <Intro />
    </div>
    {/*end of intro */}

    {/* trending section */}
     { <div className='trending'>
       <Trending/>
     </div> }
    {/* end of trending section */}

    {/* Superhero section */}
    <div className=' Superhero'>
      <Superhero/></div>

    {/* end of Superhero section */}
    </div>
    
  )
}

export default App























