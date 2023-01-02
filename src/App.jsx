import './index.css'
import { Signal } from "../components/Signal";

function App() {
  return (
    <div className="App">
      <Signal colors={[
        { color: 'red' },
        { color: 'yellow' },
        { color: 'lime' }
      ]} />
    </div>
  )
}

export default App
