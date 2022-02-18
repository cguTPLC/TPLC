import React from 'react'
import img1 from './photo/108志清湖.png'
import img2 from './photo/108志清湖2.png'
import img3 from './photo/108木亭.png'
import img4 from './photo/108木亭2.png'
import img5 from './photo/108木棧道.png'
import img6 from './photo/108木棧道2.png'
import img7 from './photo/108明德.png'
import './Page.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Page108 = () => {
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
            <div className='col-6 m-3 ca'>
                <img src={img7} width='400' height='250' ></img>
            </div>
            <a href="https://drive.google.com/drive/folders/1RmmX4xXE_EUHndItfxmy3lcIMj9tMtJg?usp=sharing">108下載</a>
        </div>
    )
}

export default Page108
