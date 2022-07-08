import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

const getStorageTheme = () => {
  let theme = 'light-theme'
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}

function App() {
  const [theme, setTheme] = useState(getStorageTheme())

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleClick = () => {
    if (theme === 'light-theme') {
      return setTheme('dark-theme')
    } else {
      return setTheme('light-theme')
    }
  }

  return (
    <main>
      <nav className="nav-center">
        <h1>overreacted</h1>
        <button className="btn" onClick={handleClick}>
          toggle
        </button>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />
        })}
      </section>
      dark mode starter
    </main>
  )
}

export default App
