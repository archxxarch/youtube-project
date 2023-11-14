import React from 'react'
import { todayText } from '../data/today'



const Today = () => {
    return (
        <section id='todayPage'>
            <h2>Today's Pick!</h2>
            {todayText.map((today, key) => (
                <div className="today__inner">
                    <div className="today__thumb"></div>
                    <div className="today__text">
                        <span className='today'>Today's Pick!</span>
                        <h3 className='title'>{today.title}</h3>
                        <p className='desc'>{today.desc}</p>
                        <p className='info'>
                            <span className='author'>{today.author}</span>
                            <span className='date'>{today.date}</span>
                        </p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Today