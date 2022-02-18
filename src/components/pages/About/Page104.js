import React from 'react'
import img1 from './photo/104王永慶雕像.png'
import img2 from './photo/104邱形蟲.png'
import img3 from './photo/104青蛙湖.png'
import img4 from './photo/104問號.png'
import img5 from './photo/104網球場.png'
import img6 from './photo/104木棧道.png'
import img7 from './photo/104繁星.png'
import img8 from './photo/104球場.png'
import './Page.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Page104 = () => {
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
            <div className='col-6 m-3 ca'>
                <img src={img8} width='400' height='250' ></img>
            </div>
                <a href="https://drive.google.com/drive/folders/1wKwq-2po7Sr5_crHSvxcgITwnmO4RxiP?usp=sharing">104下載</a>
            </div>
    )
}

export default Page104
