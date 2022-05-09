import React from 'react'
import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'
// import { motion, AnimatePresence } from 'framer-motion'

function FeedbackList({ handleDelete }) {
  const { feedback } = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return <p>Nothing Yet</p>
  }
  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  )
  // return (
  //   <div className='feedback-list'>
  //     {/* <AnimatePresence> */}
  //     {feedback.map((item) => (
  //       <motion.div
  //         key={item.id}
  //         initial={{ opacity: 0 }}
  //         animate={{ opacity: 1 }}
  //         exit={{ opacity: 0 }}
  //       >
  //         <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //       </motion.div>
  //     ))}
  //     {/* </AnimatePresence> */}
  //   </div>
  // )
  //below//
}

export default FeedbackList
