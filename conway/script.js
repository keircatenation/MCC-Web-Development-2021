// declaring setup variables
const cols = 20;
const limit = 100;
let iter = 0;
let stopState = iter;

// DOM nodes
const grid = document.querySelector('#conway');
const showIter = document.querySelector('#iteration');
const start = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resume = document.querySelector('#resume');
const reset = document.querySelector('#reset');
const step = document.querySelector('#step');

for (let cell = 0; cell < cols**2; cell++) {
  const div = document.createElement('div');
  div.setAttribute('class', Math.random() > .15 ? 'dead neveralive' : 'live');
  grid.appendChild(div);
}

const cells = Array.from(document.querySelectorAll('#conway > div'));

// set up the go function
const go = function() {
  const interval = setInterval(() => {
    if ( iter >= limit ) {
      clearInterval(interval);
      return
    } else {
      // advance the interations
      stepForward();
    }
  }, 100)
}

function stepForward() {
  iter += 1;
  stopState += 1;
  showIter.innerText = 'Iteration: ' + iter;

  const state = cells.map((cell, index, array) => {
    // grab the classnames of the cells around the cell

    return [
      array[index - 1] && array[index - 1].getAttribute('class'),
      array[index + 1]?.getAttribute('class'),
      array[index - cols]?.getAttribute('class'),
      array[index - cols - 1]?.getAttribute('class'),
      array[index - cols + 1]?.getAttribute('class'),
      array[index + cols]?.getAttribute('class'),
      array[index + cols - 1]?.getAttribute('class'),
      array[index + cols + 1]?.getAttribute('class'),
    ].reduce((acc, cur) => {
      // this reduces all of the classnames down, counting up the 'dead' and 'alive' and 'dead neveralive'
      if(cur) acc[cur] += 1
      // console.log("current class: ",cur, "accumulator: ",acc)
      return acc
    }, {dead: 0, live: 0, 'dead neveralive': 0})
  } )

  /* RULES:
    Any live cell with 2 or 3 live neighbors => live
    Any dead cell with 3 live neighbors => live
    Any other dead OR live cell => dead
   */
  cells.forEach( (cell, index) => {
    let isAlive = cell.classList.contains('live');
    let liveNeighbors = state[index].live;

    if ( isAlive && [2,3].includes(liveNeighbors) ) {
      // it's live!
      cell.classList.add('live');
      cell.classList.remove('neveralive');
      cell.classList.remove('dead');
    } else if( !isAlive && liveNeighbors === 3 ) {
      // turn live!
      cell.classList.add('live');
      cell.classList.remove('neveralive');
      cell.classList.remove('dead');
    } else {
      //turn dead :(
      cell.classList.add('dead');
      cell.classList.remove('live');
    }
  } )
}

start.addEventListener( 'click', (e) => {
  iter = stopState;
  go();
} )

stopBtn.addEventListener( 'click', e => {
  stopState = iter;
  iter = limit + 1;
} )

resume.addEventListener( 'click', e => {
  iter = stopState;
  go();
} )

reset.addEventListener( 'click', e => {
  stopState = 0;
  iter = limit + 1;
  showIter.innerText = 'Iteration: 0';
  cells.forEach(cell => {
    cell.setAttribute('class', Math.random() > .15 ? 'dead neveralive' : 'live');
  })
} )

step.addEventListener( 'click', e => {
  if ( iter > limit ) {
    iter = stopState
  }
  stepForward();
} )


// PRE-SET CODE ADD-ONS
const preset1Button = document.querySelector('#preset1')
// const preset1 = [
//   '', '', '', '', '.', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 
//   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '.', '', '', '', '', '', 
//   '', '', '', '', '', '', '', '', '', '', '', '', '', '.', '', '', '', '', '', '', 
//   '', '', '', '', '.', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 
//   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 
//   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 
//   '', '', '', '', '', '', '.', '', '', '', '.', '', '', '', '', '', '', '', '', '', 
//   '', '', '.', '', '', '', '', '', '', '', '', '', '', '', '', '', '.', '', '', '', 
//   '', '', '', '', '', '.', '', '', '', '', '', '', '.', '', '', '', '', '', '', '', 
//   '', '', '', '', '', '.', '', '', '.', '', '', '', '', '', '', '.', '.', '', '', '', 
//   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 
//   '', '', '', '', '', '', '', '', '', '.', '', '', '', '', '', '', '', '', '', '', 
//   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '.', '', '', '', '', 
//   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 
//   '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 
// ];

const preset2 = [1, 2 ,3, 4, 5, 50, 100, 101, 120, 60, 40, 45, 65];

preset1Button.addEventListener('click', () => {
  cells.forEach( (cell, i) => {
    cell.setAttribute('class', preset2.includes(i) ? 'live' : 'dead neveralive');
  } )
})

grid.addEventListener('mouseover', e => {
  // console.log(e.target, e.relatedTarget, e.originalTarget);
  if ( e.target.classList.contains('dead') ) {
    e.target.setAttribute('class', 'live');
  }
})