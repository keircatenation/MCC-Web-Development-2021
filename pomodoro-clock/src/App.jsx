import { useState } from 'react'
import './App.css'
import Controls from './components/Controls/Controls'
import Labels from './components/Labels/Labels'

function App() {

  return (
    <>
    <header>
      <h1>Pomodoro Productivity Clock</h1>
      <p>Break up your work sessions with short breaks to increase concentration!</p>
    </header>
      <Labels/>

      <Controls/>
    </>
  )
}

export default App
