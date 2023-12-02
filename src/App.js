import { useEffect } from 'react';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
const alanKey = '6ce25c905a2c8e5870949d9710e0dbe32e956eca572e1d8b807a3e2338fdd0dc/stage';
function App() {
  useEffect(()=>{
    alanBtn({
      key:alanKey,
    })
  },[])
  return (
    <div className="App">
      <h1>Alan AI News Application</h1>
    </div>
  );
}

export default App;
