import Headex from './Components/headex'
import FeedbackList from './Components/FeedbackList'
import FeedbackStats from './Components/FeedbackStats'
import FeedbackForm from './Components/FeedbackForm'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeedbackData from './Data/FeedbackData'
import { useState } from 'react'
import AboutPages from './Pages/AboutPages'
import AboutIconLink from './Components/AboutIconLink'
function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <Router>
      <Headex />
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <div className='container'>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </div>
            </>
          }
        ></Route>
        <Route path='/about' element={<AboutPages />} />
      </Routes>
      <AboutIconLink />
    </Router>
  )
}

export default App
