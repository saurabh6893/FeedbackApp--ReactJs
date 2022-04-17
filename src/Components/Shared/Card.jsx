import { FaTimes } from 'react-icons/fa'
import React from 'react'

function Card({ children, reverse }) {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>
}

export default Card
