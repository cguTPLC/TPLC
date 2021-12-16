import React from 'react'
import img1 from '../photo/103/上 - 5/1.校園巡禮/DSCN1709.JPG'
import img2 from '../photo/103/上 - 5/1.校園巡禮/DSCN1711.JPG'
import img3 from '../photo/103/上 - 5/1.校園巡禮/DSCN1718.JPG'
import img4 from '../photo/103/上 - 5/1.校園巡禮/DSCN1721.JPG'
import img5 from '../photo/103/上 - 5/1.校園巡禮/DSCN1722.JPG'
import img6 from '../photo/103/上 - 5/1.校園巡禮/DSCN1724.JPG'

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
