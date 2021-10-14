
import React, {useState} from 'react';
import Components from './components/Components';
import './App.css';

function App() {

  const [cont, setCont] = useState('')

  const lol = document.getElementById("texto");
  const rango = document.getElementById("rango");
  
  let acho = cont.replaceAll('a', 'i').replaceAll('e','i').replaceAll('o', 'i').replaceAll('u','i')
 
  function texto(){
    playText(lol.value)
  }
  function playText(text){
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = rango.value || 1
    speechSynthesis.speak(utterance)
  }


  return (

    <div className="App">

      <header className="App-header">
        <h1 className="title"
        onClick={texto}>F·Translate</h1>

        <div>

        <input type="range" id="rango" min=".5" max="2.5"></input>
        
        </div>

      </header>

      <section>
            
              <textarea onChange={ (e) => setCont(e.target.value) } ></textarea>
                
              <textarea  value={acho} id="texto"></textarea>
              

      </section> 
      
    </div>
  );
}

export default App;
