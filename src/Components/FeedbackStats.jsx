import React from 'react'

function FeedbackStats({ feedback }) {
  let avg =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedback.length

  avg = avg.toFixed(1)
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating:{avg}</h4>
      feedback
    </div>
  )
}

export default FeedbackStats