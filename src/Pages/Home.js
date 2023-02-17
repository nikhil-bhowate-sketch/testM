import React, { useEffect, useState } from 'react';
import './Home.css';
import '../Componentes/Header.css'
import wall from './Assets/wall.png';
import star from './Assets/2.png';
import poly from './Assets/Poly.svg';
import wall2 from './Assets/wall2.svg';
import scarfae from './Assets/scarface.png'
import Logo from '../Pages/Assets/properlogo.png';
import { ReactComponent as Vector } from '../Pages/Assets/Vector.svg';
const Home = () => {
  const movies = [{ id: 1, title: 'Game of Thrones', star: [], rating: "4", img: scarfae },
  { id: 2, title: 'Game of Thrones', star: [], rating: "4", img: scarfae },
  { title: 'The one', star: [], rating: "4", img: wall2 },
  { title: 'Game of Thrones', star: [], rating: "4", img: wall2 },
  { title: 'Game of Thrones', star: [], rating: "4", img: wall2 }]

  const [moviesData, setMoviesData] = useState(movies);
  const [search, setSearch] = useState('')
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  useEffect(() => {
    const result = moviesData.filter((item) => {
      return item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      // return item.title
    })
    console.log(result);
    // setMoviesData(result)
  }, [search])
  console.log(search);
  return (
    <>
      <header>
        <nav>
          <img src={Logo} className='logo' alt='no img' />
          <div className='search_box'>
            <input placeholder='search hear' value={search} onChange={handleChange} />
            <span className='icon_search'><Vector className='vector' /></span>
          </div>
          <ol>
            <li> <a href='#'>logout</a>  </li>
          </ol>
        </nav>
      </header>
      <section>
        <div >
          <img className='home_wall' src={wall} alt='no img' />
        </div>
        <h1>Trending</h1>
        {/* movies cards */}
        <article>
          <div className='cards_layout'>
            <div className='card_wrapper'>
              {moviesData.map((items, i) => {
                return <div key={i} className='cards'>
                  <div className='card_img_div'>
                    <img src={items.img} alt='no img' className='cards_img' />
                  </div>
                  <div className='card-container'>
                    <h3 className='card-header'>{items.title}</h3>
                    <div className='card_rating'>
                      <div className='card_rating-fix'>
                      <img className='star_sty' src={star} alt='no img' /> 
                      <img className='star_sty' src={star} alt='no img' /> 
                      <span>4.5/5</span>
                        </div>
                      <div className='card-play'>
                        <img src={poly} alt='no img' />
                      </div>
                    </div>

                  </div>
                </div>
              })}

            </div>
          </div>
        </article>
        <footer>

          <div class="pagination">
            <a href="#">{'<'}</a>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">{'>'}</a>
          </div>
        </footer>
      </section>
    </>
  )
}

export default Home