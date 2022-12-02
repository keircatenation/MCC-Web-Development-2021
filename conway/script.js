// declare setup variables
const cols = 10
const limit = 100;
var iter = Infinity;
var stopState = iter;

// Save important DOM nodes
const grid = document.querySelector('.conway')
const showIter = document.querySelector('.iteration')
const stopBtn = document.querySelector('.stop')
const start = document.querySelector('.start')
const resume = document.querySelector('.resume')
const reset = document.querySelector('.reset')

// Loop over cols squared to append a div w/ its calls for each cell
for (let cell = 0; cell < cols**2; cell++) {
  const div = document.createElement('div')
  div.setAttribute('class', Math.random() > .15 ? 'dead neveralive' : 'live')
  grid.appendChild(div)
}

// Save an array of the cells
const cells = Array.from(document.querySelectorAll('.conway > div'))

// Setup interval
setInterval(() => {
  if(iter >= limit) {
    return
  } else {
    iter += 1
    showIter.innerText = 'Iteration: ' + iter
    // We are counting up the dead and live cells around each cell and putting it in an array that maps to each cell
    const state = cells.map((c, i, arr) => {
        // These are all grabbing the classes of the cells around this cell
      return [
        arr[i - 1] && arr[i - 1].getAttribute('class'),
        arr[i + 1]?.getAttribute('class'),
        arr[i - cols]?.getAttribute('class'),
        arr[i - cols - 1]?.getAttribute('class'),
        arr[i - cols + 1]?.getAttribute('class'),
        arr[i + cols]?.getAttribute('class'),
        arr[i + cols - 1]?.getAttribute('class'),
        arr[i + cols + 1]?.getAttribute('class'),
      ].reduce((acc, cur) => {
        // this reduces all of the classnames down, counting up the 'dead' and 'alive' and 'dead neveralive'
        if(cur) acc[cur] += 1
        return acc
      }, {dead: 0, live: 0, 'dead neveralive': 0})
    })

     /* RULES: 
      Any live cell with 2 or 3 live neighbors => live
      Any dead cell with 3 live neighbors => live
      Any other dead OR live cell => dead */
    cells.forEach((cell, i) => {
      // let isAlive = cell.getAttribute('class') === 'live'
      let isAlive = cell.classList.value.includes('live')
      let liveNeighbors = state[i].live

     if (isAlive && [2, 3].includes(liveNeighbors)) {
        // cell.setAttribute('class', 'live')
        cell.classList.add('live')
        cell.classList.remove('neveralive')
        cell.classList.remove('dead')
      } else if (!isAlive && liveNeighbors === 3) {
        // cell.setAttribute('class', 'live')
        cell.classList.add('live')
        cell.classList.remove('neveralive')
        cell.classList.remove('dead')
      } else {
        // cell.setAttribute('class', 'dead')
        cell.classList.add('dead');
        cell.classList.remove('live')
      }
    })

  }
}, 100)

start.addEventListener('click', e => {
    iter = 0
})

stopBtn.addEventListener('click', () => {
    stopState = iter
    iter = limit + 1
})

resume.addEventListener('click', () => {
    iter = stopState
})

reset.addEventListener('click', () => {
    stopState = 0;
    iter = limit + 1;
    showIter.innerText = 'Iteration: 0'
    cells.forEach(cell => {
        cell.setAttribute('class', Math.random() > .25 ? 'dead neveralive' : 'live')
    })
})

// PRE-SET CODE ADD-ONS
const preset1Button = document.querySelector('.preset1')

// the pre-set ones
const preset1 = [
  'alive', , , , , , , , , ,
  'alive', , , , , , , , , ,
  'alive', , , , , , , , , ,
  'alive', , , , , , , , , ,
  'alive', , , , , , , , , ,
  'alive', , , , , , , , , ,
  'alive', , , , , , , , , ,
  'alive', , , , , , , , , ,
  'alive', , , , , , , , , ,
  'alive', , , , , , , , , ,
]

preset1Button.addEventListener('click', () => {
  cells.forEach( (cell, i) => {
    cell.setAttribute('class', preset1[i] ? 'live' : 'dead neveralive');
  } )
})