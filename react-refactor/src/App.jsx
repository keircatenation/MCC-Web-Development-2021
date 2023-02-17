import { useState } from 'react'
import Footer from './components/Footer'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import './App.css'
import { themes, dragonTypes } from './assets/data'

function App() {
  const [theme, setTheme] = useState(themes[0])
  // we are going to keep track of a litght and dark theme for the arena
  // we have 

  function handleThemeChange(val) {
    console.log(val, 'theme changes');
    setTheme(val);
  }
  return (
    <>
      <header className={theme}>
        Header!
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
      <Main theme={theme} />
      <Sidebar theme={theme} />
      <Footer theme={theme} />
    </>
  )
}

export default App
