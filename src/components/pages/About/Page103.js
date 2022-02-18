import React from 'react'
import img1 from './photo/103下雨.png'
import img2 from './photo/103木棧道2.png'
import img3 from './photo/103王永慶雕像.png'
import img4 from './photo/103好漢坡.png'
import img5 from './photo/103杜鵑花.png'
import img6 from './photo/103木棧道.png'
import img7 from './photo/103花.png'
import img8 from './photo/103青山路.png'
import './Page.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Page103 = () => {
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
                <a href="https://drive.google.com/drive/folders/1DOz8VtFmZbXEJIRmCN0ph3hTd0FtgaOE?usp=sharing">103下載</a>
            </div>
    )
}

export default Page103
