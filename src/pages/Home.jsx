import React from 'react'
import Title from '../components/Title'

const Home = () => {

    // logik - functions - kald api - hooks mv.
    
  return ( //så laver man en return til at vise hvordan man vil opbygge siden
    <div className='container'>
        <Title titleText="Velkommen til min seje dungeon" textColor='hotpink' placement='center' />
    </div>
  )
}

export default Home