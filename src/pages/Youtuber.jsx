import React from 'react'

import { youtuberText } from '../data/youtuber'
import { Link } from 'react-router-dom'


const Youtuber = () => {
    return (
        <section id='youtuberPage'>
            <section id='youtuber'>
                <h2>🏛ARCHITECT Youtuber</h2>
                <div className='youtuber__inner'>
                    {youtuberText.map((youtuber, key) => (
                        <div className='youtuber play__icon' key={key}>
                            <div className='youtuber__img'>
                                <Link to={`/channel/${youtuber.channelId}`}>
                                    <img src={youtuber.img} alt={youtuber.author} />
                                </Link>
                            </div>
                            <div className='youtuber__info'>{youtuber.author}</div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    )
}

export default Youtuber