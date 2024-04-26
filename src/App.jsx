import './App.css'
import FlashcardDisplay from './Components/FlashcardDisplay'
import Navbar from './Components/Navbar'
import PathTracer from './Components/PathTracer'

function App() {
  return (
    <div className='px-4 md:px-14 py-4 overflow-x-hidden'>
      <Navbar />
      <PathTracer />
      <FlashcardDisplay />
    </div>
  )
}

export default App
