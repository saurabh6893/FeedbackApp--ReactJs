import React from 'react'
import { useState, useContext } from 'react'
import RatingSelect from './RatingSelect'
import Card from './Shared/Card'
import Button from './Shared/Button'
import FeedbackContext from '../Context/FeedbackContext'
function FeedbackForm() {
  const { addFeedback } = useContext(FeedbackContext)
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)

  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length < 10) {
      setBtnDisabled(true)
      setMessage('Enter atleast 10 words')
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating,
      }
      addFeedback(newFeedback)
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would u Rate our Services?</h2>

        <RatingSelect
          select={(rating) => {
            setRating(rating)
          }}
        />
        <div className='input-group'>
          <input
            type='text'
            onChange={handleChange}
            placeholder='please Share your valuable Feedback'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
