import { useState } from 'react'
import Navigation from './components/Navigation'
import FloatingBubblesBackground from './components/FloatingBubblesBackground'
import MainContent from './components/MainContent'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [showBubbles, setShowBubbles] = useState(true)

  const handleExploreClick = () => {
    setShowBubbles(false)
  }

  return (
    <div className="App">
      {!showBubbles && <Navigation />}
      
      {showBubbles ? (
        <FloatingBubblesBackground 
          title="YongIn AI Env Camp 2025.07.26 " 
          onExploreClick={handleExploreClick}
        />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <MainContent onBackClick={() => setShowBubbles(true)} />
        </motion.div>
      )}
    </div>
  )
}

export default App 