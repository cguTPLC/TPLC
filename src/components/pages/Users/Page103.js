import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import FirstSemester3 from './Page103/FirstSemester3'
import FirstSemester5 from './Page103/FirstSemester5'
import SecondSemester3 from './Page103/SecondSemester3'
import SecondSemester5 from './Page103/SecondSemester5'

const Page103 = () => {
    const [semAndDay, setsemAndDay] = useState('up-3');
    return (
        <div className=''>
            <Button variant="outline-secondary" className='col' onClick={() => setsemAndDay('up-3')}>上學期 星期三</Button>{' '}
            <Button variant="outline-secondary" className='col' onClick={() => setsemAndDay('up-5')}>上學期 星期五</Button>{' '}
            <Button variant="outline-secondary" className='col' onClick={() => setsemAndDay('down-3')}>下學期 星期三</Button>{' '}
            <Button variant="outline-secondary" className='col' onClick={() => setsemAndDay('down-5')}>下學期 星期五</Button>{' '}
            {(() => {
                switch (semAndDay) {
                    case 'up-3':
                        return <FirstSemester3/>
                    case 'up-5':
                        return <FirstSemester5/>
                    case 'down-3':
                        return <SecondSemester3/>
                    case 'down-5':
                        return <SecondSemester5/>
                }})()}
        </div>
    )
}

export default Page103
