import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [secondsOpen, setSecondsOpen] = useState(0)
  const [clicksCount, setClicksCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setSecondsOpen(secondsOpen + 1), 1000)
    return () => clearTimeout(timer)
  }, [secondsOpen, setSecondsOpen])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React logo" />
        <h1>Hello Snowpack + React!</h1>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          Page has been open for <code>{secondsOpen}</code> seconds.
        </p>
        <p>
          <button
            type="button"
            onClick={() => setClicksCount((count) => count + 1)}
          >
            Count is: {clicksCount}
          </button>
        </p>

        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://www.snowpack.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Snowpack Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
