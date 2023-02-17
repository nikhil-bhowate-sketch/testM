import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd';
import style from './Details.module.css'
import BackArrow from '../Pages/Assets/backarrow.svg'
import VideoPlayer from '../Pages/Assets/player.svg'
import logo from '../Pages/Assets/properlogo.png'
import Img from '../Pages/Assets/scarface.png'
const Details = () => {
    const [movieDetail, setMovieDetail] = useState([])
    const [play, setPlay] = useState(false)
    return (
        <>
            <header className='login_header'>
                <img className='login_logo' src={logo} alt='no' />
            </header>
            <Row className={style.MovieDetailsRow}>
                <>
                    <Col flex="0 1 650px" className={style.MovieDetails}>
                        < div className={style.MovieDetailsContainer}>
                            <img src={BackArrow} alt="BackArrow" style={{ cursor: "pointer" }} id={style.backarrow} />
                            <h1>
                                themoviedb
                            </h1>

                            <p className={style.rating}>Rating: 5/ 5</p>

                            <p className={style.description}>
                                themoviedb
                            </p>

                            <p>Release Date  </p>
                            <p className={style.language}>Orginal Language <span>English, Spanish, French</span> </p>
                        </div>
                    </Col>


                    <Col flex="1 1 200px" className={style.movieImg}>
                        <div className={style.background} style={{ backgroundImage: `url(${Img})`, height: '100vh' }}>

                            <div id={style.id}></div>
                            <div className="videoPlayer">
                                <img id={style.img} src={VideoPlayer} alt="VideoPlayer"
                                    onClick={() => setPlay(true)}
                                />
                            </div>
                        </div>
                    </Col>
                </>
            </Row>
            <div className={style.modal} >

                {/* {play ? <Modal id={id} onClick={()=>setPlay(false)} /> : ""} */}
            </div>
        </>
    )
}

export default Details