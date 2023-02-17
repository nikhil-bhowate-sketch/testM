import React, { useEffect, useState } from 'react'
import style from './Module.css'

const Modal = ({ id, onClick }) => {
    const [movieData, setMovieData] = useState([])

    return (
        <>
            {movieData.length > 0 ?
                <>
                    <div className="modalContainer">
                        <div className={style.modalCloseButton}>
                            <button onClick={onClick}><i class="fa-sharp fa-solid fa-xmark"></i></button>
                        </div>
                        < iframe className={style.modal}
                            src=''
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </>
                : ""}
        </>
    )
}

export default Modal