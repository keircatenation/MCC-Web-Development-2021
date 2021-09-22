import styles from "./DrumPad.module.scss"

function DrumPad(props) {
  
    return (
      <button class={`drum-pad ${styles.root}`} id={props.id}>
          <p>{props.letter}</p>
          {/* HTML5 audio element with a src pointing to an audio clip, a class name of "clip", and an id corresponding to the inner text of its parent */}
          {/* onClick -> the audio clip in the child element plays */}
          {/* on LETTER button press -> the audio clip in the child element plays */}
      </button>
    )
  }
  
  export default DrumPad