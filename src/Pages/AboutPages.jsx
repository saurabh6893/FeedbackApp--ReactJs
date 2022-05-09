import React from 'react'
import Card from '../Components/Shared/Card'
import { Link } from 'react-router-dom'
function AboutPages() {
  return (
    <Card>
      <div className='about'>
        <h1>My AboutPages routed page</h1>
        <p>My name is Eobart Thawne</p>
        <p>version:Yellow flash or So called Reverse Flash</p>
        <p>
          <Link to='/'>Back</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPages
