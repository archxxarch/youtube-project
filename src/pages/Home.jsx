import React from 'react'

const Home = () => {
    return (
        <section id='today'>
            <div className="today__inner">
                <div className="today__thumb">

                </div>
                <div className="today__text">
                    <span className='today'>Today's Pick!</span>
                    <h3 className='title'>Inside An Architectural Family House With An Iconic Rooftop Garden</h3>
                    <p className='desc'>
                        The Local Project is your gateway to extraordinary architecture and interior design stories across Australia, New Zealand, and North America.
                    </p>
                    <p className='info'>
                        <span className='author'>The Local Project</span>
                        <span className='date'>Nov 10, 2023</span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Home