import styles from "./DrumPad.module.scss"

function DrumPad(props) {
  const setDescription = props.setter;
  
  const handlePlay = () => {
    const a = document.getElementById(props.letter)
    // console.log(a);
    a.play();
    setDescription(props.description)
  }
  
    return (
      <div className={`drum-pad ${styles.root}`} id={props.id} onClick={handlePlay}>
          <h2>{props.letter}</h2>
          {/* <p>{props.description}</p> */}
          {/* HTML5 audio element with a src pointing to an audio clip, a class name of "clip", and an id corresponding to the inner text of its parent */}
          {/* onClick -> the audio clip in the child element plays */}
          {/* on LETTER button press -> the audio clip in the child element plays */}
          <audio className="clip" id={props.letter} src={props.src} description={props.description}/>
      </div>
    )
  }
  
  export default DrumPad