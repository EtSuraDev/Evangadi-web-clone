import { useState } from 'react'
import Home from './pages/home'
import TopSection from './components/topSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' main overflow-visible flex items-start flex-col '>
      <Home />
      <TopSection />  
    </div>
  )
}

export default App
