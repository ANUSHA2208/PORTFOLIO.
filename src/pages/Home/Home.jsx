import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'
import Header from '../../components/Button/Header'
import Footer from '../../components/Button/Footer'
import Gallery from '../../components/Button/Gallery'
import Work from '../../components/Button/Work'

const Home = () => {

    const navigate = useNavigate()

    const changeDir = (dir) =>{
        navigate(dir)
    }

  return (
    <div className='Home'>
      {/* <Work/> */}
      <Header/>
      <Work/>
      <Footer/>
        {/* <button className={`bg-[#3498db] p-[10px] text-[white] rounded-md hover:bg-[red] hover:text-[#3498db]`} onClick={()=>{changeDir(ROUTES.About)}}>Go To About</button> */}
    </div>
  )
}

export default Home