import React from 'react'
import img1 from '../photo/103/上 - 3/環校/2014-09-24 10.01.32.jpg'
import img2 from '../photo/103/上 - 3/環校/2014-09-24 10.01.40.jpg'
import img3 from '../photo/103/上 - 3/環校/2014-09-24 10.18.21.jpg'
import img4 from '../photo/103/上 - 3/環校/2014-09-26 22.37.44.jpg'
import img5 from '../photo/103/上 - 3/環校/2014-09-26 22.37.54.jpg'
import img6 from '../photo/103/上 - 3/環校/2014-09-26 22.37.59.jpg'

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
