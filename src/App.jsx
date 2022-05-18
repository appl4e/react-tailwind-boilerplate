import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App mx-5 mt-3">
      <h2 className="text-2xl border-b border-solid inline-block border-black ">Basic Elements</h2>
      <div>
        <h4>Font Styles</h4>
        <div className='border p-4 mx-4 mt-4'>
          <div>
            <p>Font sans</p>
            <p className='font-sans'>The quick brown fox jumps over the lazy dog.</p>
          </div>
          <div>
            <p>Font Serif</p>
            <p className='font-serif'>The quick brown fox jumps over the lazy dog.</p>
          </div>
        </div>
      </div>
      <div>
        <h4>Buttons</h4>
        <div className='border p-4 mx-4 mt-4'>
          <button className='btn btn-primary'>
            Button
          </button>
        </div>
      </div>
     
    </div>
  )
}

export default App
