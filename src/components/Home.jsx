import React from 'react'
import Banner from './Banner'
import CategoryBar from './CategoryBar'
import CoursesPage from './CoursesPage'

const Home = () => {
  return (
        <>
      <div className='lg:px-9 md:px-5 sm:px-3 pt-10'>
<Banner/>

    </div>
    <div className='lg:px-9 md:px-5 sm:px-5 pt-10'>
<CoursesPage/>
    </div>
    <div>
        
    </div>
    
    </>
  )
}

export default Home