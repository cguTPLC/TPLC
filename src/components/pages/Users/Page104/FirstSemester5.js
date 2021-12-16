import React from 'react'
import img1 from '../photo/104/上 - 5/1.校園巡禮/DSCN3162.JPG'
import img2 from '../photo/104/上 - 5/1.校園巡禮/DSCN3167.JPG'
import img3 from '../photo/104/上 - 5/1.校園巡禮/DSCN3169.JPG'
import img4 from '../photo/104/上 - 5/1.校園巡禮/DSCN3183.JPG'
import img5 from '../photo/104/上 - 5/1.校園巡禮/DSCN3187.JPG'
import img6 from '../photo/104/上 - 5/1.校園巡禮/DSCN3192.JPG'

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
