import React from 'react'
import { todayText } from '../../data/today'


const Today = () => {
    return (
        <section id='today'>
            <div className="today__inner">
                <div className="today__thumb"></div>
                <div className="today__text">
                    <span className='today'>Today's Pick!</span>
                    <h3 className='title'>{todayText[0].title}</h3>
                    <p className='desc'>{todayText[0].desc}</p>
                    <p className='info'>
                        <span className='author'>{todayText[0].author}</span>
                        <span className='date'>{todayText[0].date}</span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Today