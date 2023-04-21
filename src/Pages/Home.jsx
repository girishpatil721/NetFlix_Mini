import React from 'react'
import movie_data from '../resources/data'
import Cards from '../components/Cards';
import Slider from '../components/slider';
import { search } from '../Navbar/Navbar_action';
import { useSelector } from 'react-redux';

const Home = () => {
  const search = useSelector(state=>state.search);
  return (
    <>
      <h1 className='main text-under-line text-center'>🔥Welcome To <span className='text'>Netflix</span> Movie World🔥</h1>
      <hr />
      <div className='continer slid'>
        <Slider />
      </div>

      <hr />

      <div className="continer grids">
        {
          movie_data.map((val, i) => {
            if(val.movie_name.includes(search))
            return (
              <Cards key={i} name={val.movie_name} img={val.img_link} desc={val.desc} />
            )
          })
        }
      </div>
      <hr /></>
  )
}

export default Home;