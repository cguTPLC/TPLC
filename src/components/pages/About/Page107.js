import React from 'react'
import img1 from './photo/107志清湖.png'
import img2 from './photo/107文物館.png'
import img3 from './photo/107青蛙湖.png'
import img4 from './photo/107草地.png'
import img5 from './photo/107操場.png'
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
                <a href="https://drive.google.com/drive/folders/1J-Ia11Xm7tnhuueR7RWYQ8dmEvmmcSKr?usp=sharing">107下載</a>
            </div>
    )
}

export default Page108

