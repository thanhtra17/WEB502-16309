import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const person = {
  name:"tra",
  age: 20
}

ReactDOM.render(<div>
<p>{person.name}</p>
<p>{person.age}</p>

</div>,document.getElementById('root')
)
