import React from 'react'

export default function ProgressCircle() {
    return (
        <span className='progress-circle'>
            <svg className='progress-circle__the-bar'
                xmlns='http://www.w3.org/2000/svg' 
                version='1.1' 
                width='160px' 
                height='160px'>
                <defs>
                <linearGradient id='GradientColor'>
                    <stop offset='0%' stopColor='#DA22FF' />
                        <stop offset='100%' stopColor='#9733EE' />
                </linearGradient>
                </defs>
                <circle cx='80' cy='80' r='60' strokeLinecap='round' />
            </svg>
        </span>
)
}