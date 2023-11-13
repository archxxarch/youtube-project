import React from 'react'
import { Link } from 'react-router-dom'
import { PiHouse } from 'react-icons/pi'

const Logo = () => {
    return (
        <h1 className='header__logo'>
            <Link to='/'>
                <em><PiHouse /></em>
                <span>architecture<br /> youtube</span>
            </Link>
        </h1>
    )
}

export default Logo