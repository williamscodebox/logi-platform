import './App.css'
import Inventory from './pages/Inventory/inventory'

function App() {

  return (
    <>
      <section id="center">
        <div id="left">
          <h1>Logi Platform</h1>
          <p>
            A modular, open-source ERP system built with React and Node.js.
          </p>
          <Inventory />
          </div>
          
     
      </section>
    </>
  )
}

export default App
