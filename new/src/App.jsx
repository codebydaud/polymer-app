import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/MyButton'
import HelloWorld from './components/HelloWorld'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className='text-blue-600'>Hello Vite + React!</p>
        <HelloWorld />
        <MyButton />
      </header>
    </div>
  );
}

export default App


