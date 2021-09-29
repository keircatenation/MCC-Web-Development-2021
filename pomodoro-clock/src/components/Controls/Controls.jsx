import { useState } from 'react'
import styles from "./controls.module.scss"

function Controls() {

  return (
    <div className={styles.root}>
      <button id="break-decrement">break decrement</button>
      <button id="session-decrement">session decrement</button>
      <button id="break-increment">break increment</button>
      <button id="session-increment">session increment</button>

      <button id="start_stop">{"start / stop"}</button>
      <button id="reset">Reset</button>
      
    </div>
  )
}

export default Controls
