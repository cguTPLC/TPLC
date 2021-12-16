import React from 'react'
import img1 from '../photo/105/上 - 3/環校/IMG_0905.JPG'
import img2 from '../photo/105/上 - 3/環校/IMG_0909.JPG'
import img3 from '../photo/105/上 - 3/環校/IMG_0920.JPG'
import img4 from '../photo/105/上 - 3/環校/IMG_0922.JPG'
import img5 from '../photo/105/上 - 3/環校/IMG_0924.JPG'
import img6 from '../photo/105/上 - 3/環校/IMG_0932.JPG'

const FirstSemester3 = () => {
    return (
        <div className='row'>
            <div className='col-3 m-3 ca'>
                <img src={img1} width='400' height='250' ></img>
            </div>
            <div className='col-3 m-3 ca'>
                <img src={img2} width='400' height='250' ></img>
            </div>
            <div className='col-3 m-3 ca'>
                <img src={img3} width='400' height='250' ></img>
            </div>
            <div className='col-3 m-3 ca'>
                <img src={img4} width='400' height='250' ></img>
            </div>
            <div className='col-3 m-3 ca'>
                <img src={img5} width='400' height='250' ></img>
            </div>
            <div className='col-3 m-3 ca'>
                <img src={img6} width='400' height='250' ></img>
            </div>
        </div>
    )
}

export default FirstSemester3
