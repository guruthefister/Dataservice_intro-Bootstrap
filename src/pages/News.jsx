import React from 'react'
import Title from '../components/Title'


  const News = () => {
    return (
      <div className="container">
        <Title titleText="Nyheder" textColor='red' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ducimus ratione, repudiandae porro, excepturi provident, eaque dolorem nemo exercitationem rerum culpa dignissimos vero explicabo dolorum consequuntur quos est ea sint.
        </p>

        <button type='button' className='mx-2 btn btn-primary'>Primary</button>
        <button type='button' className='mx-2 btn btn-secondary'>Secondary</button>
        <button type='button' className='mx-2 btn btn-success'>Success</button>
        <button type='button' className='mx-2 btn btn-danger'>Danger</button>
        <button type='button' className='mx-2 btn btn-warning'>Warning</button>
        <button type='button' className='mx-2 btn btn-info'>Info</button>
        <button type='button' className='mx-2 btn btn-brainmatter'>Brainmatter</button>

      </div>
    )
  }

  export default News