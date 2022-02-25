import React from 'react'
import { useState } from 'react';
import './About.css'
import Page109 from './About/Page109'
import Page108 from './About/Page108'
import Page107 from './About/Page107'
import Page106 from './About/Page106'
import Page105 from './About/Page105'
import Page104 from './About/Page104'
import Page103 from './About/Page103'
import Page102 from './About/Page102'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import img from './About/photo/map.png'
import img2 from './About/photo/109志清湖.png'
import img3 from './About/photo/109青蛙湖2.PNG'
import img4 from './About/photo/109木棧道.png'
import img5 from './About/photo/109青蛙湖.png'
import img6 from './About/photo/109管八.png'
import img7 from './About/photo/109操場.PNG'
import img8 from './About/photo/109雕像.PNG'
import img9 from './About/photo/109明德.PNG'
import img10 from './About/photo/102木棧道.png'
import img11 from './About/photo/102王永慶雕像.png'
import img12 from './About/photo/102王永慶雕像2.png'
import img13 from './About/photo/103木棧道.png'
import img14 from './About/photo/103木棧道2.png'
import img15 from './About/photo/103王永慶雕像.png'
import img16 from './About/photo/103好漢坡.png'
import img17 from './About/photo/104木棧道.png'
import img18 from './About/photo/104王永慶雕像.png'
import img19 from './About/photo/104青蛙湖.png'
import img20 from './About/photo/104繁星.png'
import img21 from './About/photo/105王永慶雕像.png'
import img22 from './About/photo/105志清湖.png'
import img23 from './About/photo/106木棧道 (2).png'
import img24 from './About/photo/106木棧道.png'
import img25 from './About/photo/106好漢坡.png'
import img26 from './About/photo/106希望樹.png'
import img27 from './About/photo/106青蛙湖.png'
import img28 from './About/photo/106圖書館.png'
import img29 from './About/photo/107文物館.png'
import img30 from './About/photo/107志清湖.png'
import img31 from './About/photo/107青蛙湖.png'
import img32 from './About/photo/107操場.png'
import img33 from './About/photo/108木亭.png'
import img34 from './About/photo/108木亭2.png'
import img35 from './About/photo/108木棧道.png'
import img36 from './About/photo/108木棧道2.png'
import img37 from './About/photo/108志清湖.png'
import img38 from './About/photo/108志清湖2.png'
import img39 from './About/photo/108明德.png'
import img40 from './About/photo/109木棧道.png'
import img41 from './About/photo/109志清湖.png'
import img42 from './About/photo/109明德.PNG'
import img43 from './About/photo/109青蛙湖.png'
import img44 from './About/photo/109青蛙湖2.PNG'
import img45 from './About/photo/109管八.png'
import img46 from './About/photo/109操場.PNG'
import img47 from './About/photo/109雕像.PNG'
function About() {
    const [year, setYear] = useState('109');
    const [mode, setMode] = useState(true);
    const [place, setPlace] = useState('Min-De');
    return (
        <>  <div className='bn'>
                <Button variant="outline-secondary" className='col' onClick={() => setMode(true)}>依照年份</Button>
                <Button variant="outline-secondary" className='col' onClick={() => setMode(false)}>依照地點</Button>
            </div>
            {mode ? 
            <div className='container-fluid'>
                <div className='row'>
                    <ul className='col-1 left-table'>
                        <li className='red'    onClick={() => setYear('109')}>109</li>
                        <li className='orange' onClick={() => setYear('108')}>108</li>
                        <li className='yellow' onClick={() => setYear('107')}>107</li>
                        <li className='green'  onClick={() => setYear('106')}>106</li>
                        <li className='blue'   onClick={() => setYear('105')}>105</li>
                        <li className='indigo' onClick={() => setYear('104')}>104</li>
                        <li className='purple' onClick={() => setYear('103')}>103</li>
                        <li className='red'    onClick={() => setYear('102')}>102</li>
                    </ul>
                    <div className='col-11'>
                    {(() => {
                    switch (year) {
                        case '109':
                            return <div><Page109/></div>
                        case '108':
                            return <div><Page108/></div>
                        case '107':
                            return <div><Page107/></div>
                        case '106':
                            return <div><Page106/></div>
                        case '105':
                            return <div><Page105/></div>
                        case '104':
                            return <div><Page104/></div>
                        case '103':
                            return <div><Page103/></div>
                        case '102':
                            return <div><Page102/></div>
                    }})()}
                    </div>
                </div>
            </div> :
            <div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-1'>
                            <span className='side'    onClick={() => (setPlace('Min-De'))}>明德樓</span><br/>
                            <span className='side'     onClick={() => (setPlace('Ju-De'))}>據德樓</span><br/>
                            <span className='side'    onClick={() => (setPlace('Yun-De'))}>蘊德樓</span><br/>
                            <span className='side'      onClick={() => (setPlace('Hero'))}>好漢坡</span><br/>
                            <span className='side'onClick={() => (setPlace('Engineering'))}>工院</span><br/>
                            <span className='side'   onClick={() => (setPlace('Library'))}>圖書館</span><br/>
                            <span className='side'onClick={() => (setPlace('Management'))}>館院</span><br/>
                            <span className='side'    onClick={() => (setPlace('Sports'))}>操場</span><br/>
                            <span className='side'        onClick={() => (setPlace('SA'))}>活動中心</span><br/>
                            <span className='side'    onClick={() => (setPlace('Scenic'))}>青蛙湖</span><br/>
                            <span className='side'  onClick={() => (setPlace('Medical1'))}>第一醫學大樓</span><br/>
                            <span className='side'  onClick={() => (setPlace('Medical2'))}>第二醫學大樓</span><br/>
                            <span className='side'   onClick={() => (setPlace('Formosa'))}>文物館</span><br/>
                            <span className='side'    onClick={() => (setPlace('Garden'))}>創辦人公園</span><br/>
                            <span className='side'        onClick={() => (setPlace('ZC'))}>志清湖</span><br/>
                            <span className='side'      onClick={() => (setPlace('Wood'))}>木棧道</span><br/>
                        </div>
                        <div className='col-6'>
                                <img className="bigMap"src={img}></img>
                            </div>
                        <div className='col-4 photo-scroll'>
                            {(() => {
                            switch (place) {
                                case 'Min-De':
                                    return (<div className='row'>
                                    <div className='col-6 m-3 ca'>
                                        <img src={img9} width='400' height='250' ></img>
                                    </div>
                                    <div className='col-6 m-3 ca'>
                                        <img src={img39} width='400' height='250' ></img>
                                    </div>
                                    <div className='col-6 m-3 ca'>
                                        <img src={img42} width='400' height='250' ></img>
                                    </div></div>)
                                case 'Ju-De':
                                    return <div>無創作內容</div>
                                case 'Yun-De':
                                    return <div>無創作內容</div>
                                case 'Hero':
                                    return <div className='row'>
                                    <div className='col-6 m-3 ca'>
                                        <img src={img16} width='400' height='250' ></img>
                                    </div>
                                    <div className='col-6 m-3 ca'>
                                        <img src={img25} width='400' height='250' ></img>
                                    </div></div>
                                case 'Engineering':
                                    return <div>無創作內容</div>
                                case 'Library':
                                    return <div className='row'>
                                    <div className='col-6 m-3 ca'>
                                        <img src={img28} width='400' height='250' ></img>
                                    </div>
                                    </div>
                                case 'Management':
                                    return (<div className='row'>
                                    <div className='col-6 m-3 ca'>
                                        <img src={img6} width='400' height='250' ></img>
                                    </div>
                                    <div className='col-6 m-3 ca'>
                                        <img src={img20} width='400' height='250' ></img>
                                    </div>
                                    <div className='col-6 m-3 ca'>
                                        <img src={img45} width='400' height='250' ></img>
                                    </div></div>)
                                case 'Sports':
                                    return (<div className='row'>
                                    <div className='col-6 m-3 ca'>
                                        <img src={img7} width='400' height='250' ></img>
                                    </div>
                                    <div className='col-6 m-3 ca'>
                                        <img src={img32} width='400' height='250' ></img>
                                    </div>
                                    <div className='col-6 m-3 ca'>
                                        <img src={img46} width='400' height='250' ></img>
                                    </div>
                                    </div>)
                                case 'SA':
                                    return <div>無創作內容</div>
                                case 'Scenic':
                                    return (<div className='row'>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img3} width='400' height='250' ></img>
                                        </div>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img5} width='400' height='250' ></img>
                                        </div>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img19} width='400' height='250' ></img>
                                        </div>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img31} width='400' height='250' ></img>
                                        </div>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img43} width='400' height='250' ></img>
                                        </div>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img44} width='400' height='250' ></img>
                                        </div>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img27} width='400' height='250' ></img>
                                        </div>
                                        </div>)
                                case 'Medical1':
                                    return <div>無創作內容</div>
                                case 'Medical2':
                                    return <div className='row'>
                                    <div className='col-6 m-3 ca'>
                                        <img src={img26} width='400' height='250' ></img>
                                    </div>
                                </div>
                                case 'Formosa':
                                    return <div className='row'>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img29} width='400' height='250' ></img>
                                        </div>
                                    </div>
                                case 'Garden':
                                    return (<div className='row'>
                                    <div className='col-6 m-3 ca'>
                                        <img src={img8} width='400' height='250' ></img>
                                    </div>
                                    <div className='col-6 m-3 ca'>
                                        <img src={img11} width='400' height='250' ></img>
                                    </div>
                                    <div className='col-6 m-3 ca'>
                                        <img src={img12} width='400' height='250' ></img>
                                    </div>
                                    <div className='col-6 m-3 ca'>
                                        <img src={img15} width='400' height='250' ></img>
                                    </div>
                                    <div className='col-6 m-3 ca'>
                                        <img src={img18} width='400' height='250' ></img>
                                    </div>
                                    <div className='col-6 m-3 ca'>
                                        <img src={img21} width='400' height='250' ></img>
                                    </div>
                                    <div className='col-6 m-3 ca'>
                                        <img src={img47} width='400' height='250' ></img>
                                    </div>
                                    </div>)
                                case 'ZC':
                                    return (<div className='row'>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img2} width='400' height='250' ></img>
                                        </div>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img22} width='400' height='250' ></img>
                                        </div>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img30} width='400' height='250' ></img>
                                        </div>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img37} width='400' height='250' ></img>
                                        </div>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img38} width='400' height='250' ></img>
                                        </div>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img41} width='400' height='250' ></img>
                                        </div></div>)
                                case 'Wood':
                                    return (<div className='row'>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img4} width='400' height='250' ></img>
                                        </div>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img10} width='400' height='250' ></img>
                                        </div>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img13} width='400' height='250' ></img>
                                        </div>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img14} width='400' height='250' ></img>
                                        </div>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img17} width='400' height='250' ></img>
                                        </div>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img23} width='400' height='250' ></img>
                                        </div>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img24} width='400' height='250' ></img>
                                        </div>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img33} width='400' height='250' ></img>
                                        </div>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img36} width='400' height='250' ></img>
                                        </div>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img40} width='400' height='250' ></img>
                                        </div>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img34} width='400' height='250' ></img>
                                        </div>
                                        <div className='col-6 m-3 ca'>
                                            <img src={img35} width='400' height='250' ></img>
                                        </div></div>)
                            }})()}
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default About;

{/* <ul>
<ul className='right-table'>
<li><a href="https://drive.google.com/uc?id=1mJVdUrPXqpjrvRTsK-Nwsl2fxabNnMDL&authuser=1&export=download">第一組下載</a></li>
<li><a href="https://drive.google.com/uc?id=1Acjny5Aj_2cKEB31S_0_m3_BSQcBdZm-&authuser=1&export=download">第二組下載</a></li>
<li><a href="https://drive.google.com/uc?id=1l-Tjr0Z8mevVhwNtt-MOr1MmwV9Gd7OB&authuser=1&export=download">第三組下載</a></li>
<li><a href="https://drive.google.com/uc?id=1bFMwXx7CXg7J8njGCD_2fNBHWdeIKmY_&authuser=1&export=download">第四組下載</a></li>
<li><a href="https://drive.google.com/uc?id=1s2x9cYymVlSq9meJ1taS2a_xwXVqa0cd&authuser=1&export=download">第五組下載</a></li>
<li><a href="https://drive.google.com/uc?id=16r_jbGtAglKdiFYeSV7VUKuCVQwa6gQk&authuser=1&export=download">第六組下載</a></li>
<li><a href="https://drive.google.com/uc?id=1PNre12vPmAAUGkh0Zbzp4EK39EOHxYLo&authuser=1&export=download">第七組下載</a></li>
<li><a href="https://drive.google.com/uc?id=1Cwga3qoJJV5mQo4W53f7VQLssz-dC7n0&authuser=1&export=download">第八組下載</a></li>
</ul> */}