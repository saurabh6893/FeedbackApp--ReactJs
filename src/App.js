import Headex from './Components/headex'
import FeedbackList from './Components/FeedbackList'

import { FeedbackProvider } from './Context/FeedbackContext'
import FeedbackStats from './Components/FeedbackStats'
import FeedbackForm from './Components/FeedbackForm'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import AboutPages from './Pages/AboutPages'
import AboutIconLink from './Components/AboutIconLink'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Headex />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <div className='container'>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </div>
              </>
            }
          ></Route>
          <Route path='/about' element={<AboutPages />} />
        </Routes>
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  )
}

export default App
