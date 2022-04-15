// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting({initialName}) {
  // 🐨 initialize the state to the value from localStorage
  // 💰localStorage.getItem('name') ?? initialName
  const getName = () => {
    //fetch the data from local storage

    const data = localStorage.getItem('name')

    if (!data) {
      localStorage.setItem('name', initialName)
      return initialName
    }

    return data
  }
  const [name, setName] = React.useState(getName())

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰localStorage.setItem('name', name)
  React.useEffect(() => {
    localStorage.setItem('name', name)
    console.log(name)
  }, [name])

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Koddy" />
}

export default App
