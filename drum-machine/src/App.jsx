import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import DrumPad from './components/DrumPad/DrumPad'
import { drumClips } from './drumpad-data'

function App() {
  const [playing, setPlaying] = useState({description: "Description of the drum clip currently playing."})
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      let audio = document.getElementById(e.key.toLocaleUpperCase())

      if (audio){
        let r = new RegExp("-", "g")
        let description = audio.parentElement.id.replace(r, " ")
        audio.play();
        setPlaying({description})
      }
      // need to play the clips and ALSO get the description to show
    })
  }, [])

  const handleClick = (description) => {
    setPlaying({description})
  }

  return (
    <div id="drum-machine">
      <header>
        <h1>Drum Machine</h1>
        <p>Click a button to play some drums, or press the key associated with each button.</p>
      </header>

      <div id="display">
        <p>{playing.description}</p>
      </div>

      <div id="drum-pads">
        {
          drumClips.map(sound => {
            let r = new RegExp(" ", "g")
            let id = sound.description.replace(r, "-")
            return <DrumPad id={id} letter={`${sound.key}`} description={`${sound.description}`} src={`${sound.src}`} setter={handleClick} key={`${sound.description}`}/>
          })
        }
        
        {/* 9 clickable drum pad elements with a class of drum-pad */}
        {/* when a .drum-pad is triggered, a string of text describing the associated audio clip shows in the display, with each string being unique */}
      </div>
      
    </div>
  )
}

export default App
