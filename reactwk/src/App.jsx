import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
          <h1>React Week/17</h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quasi consequuntur mollitia eveniet corporis, eius aliquam quam ipsam labore saepe accusamus quia architecto doloremque. Sapiente possimus eius totam nostrum aliquam!
            </p>
          </div>

          <div>
            2 + 4
          </div>
          <div>
            { 
              2 + 4
            }
          </div>
        
    </>
  )
}

export default App
