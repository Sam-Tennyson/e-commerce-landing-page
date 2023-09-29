// libs
import React from 'react'
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { THEME_COLOR, useTheme } from '../../../contexts/ThemeContext'

const ToggleTheme = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <>
            <div className='text-end'>
                {theme === THEME_COLOR.DARK ? (
                    <i onClick={() => toggleTheme(THEME_COLOR.DARK)}>
                        <FontAwesomeIcon icon={faToggleOn} size='2xl' />
                    </i>
                ) : (
                    <i onClick={() => toggleTheme(THEME_COLOR.LIGHT)}>
                        <FontAwesomeIcon icon={faToggleOff} size='2xl' />
                    </i>
                )}
            </div>
        </>
    )
}

export default ToggleTheme