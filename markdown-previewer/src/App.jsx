import React, { useState } from 'react'
import './App.css'

import marked from "marked"
import DOMPurify from "dompurify"


const extension = {
  breaks:true,
  gfm:true,
  "langPrefix": "lang-",
}
marked.use(extension)

console.log(marked.Renderer)

const startingText = `# Header text!
## A sub-heading!
Here is a list:
1. One Item
2. Two Items!
3. [A link!](https://www.google.com)

Some code: \`<p>Doing some markdown</p>\`, with **emphasis**.

\`\`\`javascript
code block\`\`\`

> And finally, an image:

![alt text](https://placekitten.com/408/287 "Adorable cat from Placekitten")`

function App() {
  const [text, setText] = useState(startingText)

  let cleanHTML = DOMPurify.sanitize(marked(text));

  return (
    <div className="App">
      <header className="App-header">
        <h1>Markdown Previewer</h1>
      </header>
      <main>
        <section>
          <label htmlFor="editor"><h3>Enter text here:</h3></label>
          <textarea id="editor" name="editor" value={text} onChange={e => setText(e.target.value)} rows="30"/>
        </section>

        <section>
          <h3>Output:</h3>
          <output id="preview" dangerouslySetInnerHTML={{__html: cleanHTML}}></output>
        </section>
        
      </main>
    </div>
  )
}

export default App
