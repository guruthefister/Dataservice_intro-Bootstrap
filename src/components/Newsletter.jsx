import React from 'react'

const Newsletter = () => {
  return (
    <div>
        <h2>Tilmeld dig her</h2>
        <form action="">
          <div>
            <label className='form-label'>
                din mailadresse:
                <input type="email" className='form-control' placeholder='skriv din mail her'/>
            </label>
          </div>
          <button className='btn btn-success'>Hit me</button>
        </form>
    </div>
  )
}

export default Newsletter