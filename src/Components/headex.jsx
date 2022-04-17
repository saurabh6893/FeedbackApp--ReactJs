import React from 'react'

function headex({ data }) {
  return (
    <header>
      <div className='container'>
        <h2>{data}</h2>
      </div>
    </header>
  )
}

headex.defaultProps = {
  data: 'this is Header from headex',
}

export default headex
