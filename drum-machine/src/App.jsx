import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import DrumPad from './components/DrumPad/DrumPad'
import { drumClips } from './data/drumpad-data'

function App() {
  const [playing, setPlaying] = useState("Description of the drum clip currently playing.")

  return (
    <div id="drum-machine">
      <header>
        <h1>Drum Machine</h1>
        <p>Click a button to play some drums, or press the key associated with each button.</p>
      </header>

      <div id="display">
        <p>{playing}</p>
      </div>

      <div id="drum-pads">
        <DrumPad id="hewwo" letter="Q"/>
        <DrumPad id="hewwo" letter="Q"/>
        <DrumPad id="hewwo" letter="Q"/>
        <DrumPad id="hewwo" letter="Q"/>
        <DrumPad id="hewwo" letter="Q"/>
        <DrumPad id="hewwo" letter="Q"/>
        <DrumPad id="hewwo" letter="Q"/>
        <DrumPad id="hewwo" letter="Q"/>
        <DrumPad id="hewwo" letter="Q"/>
        {/* 9 clickable drum pad elements with a class of drum-pad */}
        {/* when a .drum-pad is triggered, a string of text describing the associated audio clip shows in the display, with each string being unique */}
      </div>
      
    </div>
  )
}

export default App
