import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
// import About from './components/About';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');
  const [style, setStyle] = useState({
    backgroundColor: 'white',
    color: 'black'
  });

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#3e4c64'
      setStyle({
        color: 'white'
      })
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      setStyle({
        color: 'black'
      })
    }
  }

  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode} style={style} />
    <TextArea mode={mode} toggleMode={toggleMode} style={style} />
    {/* <About /> */}
    </>
  );
}

export default App;
