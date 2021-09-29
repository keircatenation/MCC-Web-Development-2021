import { useState } from 'react'
import styles from "./labels.module.scss"

function Labels() {

  return (
    <div className={styles.root}>
      <label id="break-label" htmlFor="">Break Length</label>
      <label id="session-label" htmlFor="">Session Length</label>

      <span id="break-length">{"break length var here!"}</span>
      <span id="session-length">{"session length var here!"}</span>

      <span id="timer-label">{"string: either session or break, based on what timer is running"}</span>
      <span id="time-left">{"string in MM:SS format that displays how much time is left"}</span>
      
    </div>
  )
}

export default Labels
