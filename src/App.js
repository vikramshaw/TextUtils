import './App.css';
import About from './cmponents/About';
import Navbar from './cmponents/Navbar';
// import TextForm from './cmponents/TextForm';

function App() {
  return (
   <>
    <Navbar title="TextUtils" about="About TextUtils"/>
    <div className="container my-3">
      {/* <TextForm heading="Enter the text to analyze below"/> */}
      <About/>
    </div>
   </>
  );
}

export default App;
