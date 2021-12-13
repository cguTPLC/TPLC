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



function About() {
    const [year, setYear] = useState('109');

    return (
        <>
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
            </div>
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