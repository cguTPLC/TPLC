import React from 'react'
import img1 from '../photo/107/上 - 5/遊校/IMG_3809.JPG'
import img2 from '../photo/107/上 - 5/遊校/IMG_3814.JPG'
import img3 from '../photo/107/上 - 5/遊校/IMG_3835.JPG'
import img4 from '../photo/107/上 - 5/遊校/IMG_3838.JPG'
import img5 from '../photo/107/上 - 5/遊校/IMG_3816.JPG'
import img6 from '../photo/107/上 - 5/遊校/IMG_3824.JPG'

const FirstSemester5 = () => {
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

export default FirstSemester5
