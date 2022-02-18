import React from 'react'
import img1 from './photo/102王永慶雕像.png'
import img2 from './photo/102山間小路.png'
import img3 from './photo/102未知.png'
import img4 from './photo/102王永慶雕像2.png'
import img5 from './photo/102木棧道.png'
import img6 from './photo/102薄膜.png'
import './Page.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Page102 = () => {
    return (
        <div className='row sheet'>
            <div className='col-6 m-3 ca'>
                <img src={img1} width='400' height='250' ></img>
            </div>
            <div className='col-6 m-3 ca'>
                <img src={img2} width='400' height='250' ></img>
            </div>
            <div className='col-6 m-3 ca'>
                <img src={img3} width='400' height='250' ></img>
            </div>
            <div className='col-6 m-3 ca'>
                <img src={img4} width='400' height='250' ></img>
            </div>
            <div className='col-6 m-3 ca'>
                <img src={img5} width='400' height='250' ></img>
            </div>
            <div className='col-6 m-3 ca'>
                <img src={img6} width='400' height='250' ></img>
            </div>
            <a href="https://drive.google.com/drive/folders/1VtRy-BTHqLwYyDhMBMib-7hq7iF8AIvS?usp=sharing">102下載</a>
        </div>
    )
}

export default Page102
