import { useState } from 'react'
import Footer from './components/Footer'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Timer from './components/Timer'
import './App.css'
import { themes, dragonTypes } from './assets/data'

function App() {
  const [theme, setTheme] = useState(themes[0])
  const [dragons, setDragons] = useState([]);

  function handleThemeChange(val) {
    console.log(val, 'theme changes');
    setTheme(val);
  }
  return (
    <>
      <header className={theme}>
        Header!
        <Timer />
        <select name='theme' id='theme-select' onChange={event => handleThemeChange(event.target.value)}>
          {
            themes.map((themeSelection, index) => {
              console.log(themeSelection)
              return (
                <option value={themeSelection} key={themeSelection + index}>{themeSelection}</option>
              )
            })
          }
        </select>
      </header>
      <Main theme={theme} dragons={dragons} />
      <Sidebar theme={theme} setDragons={setDragons} />
      <Footer theme={theme} />
    </>
  )
}

export default App
