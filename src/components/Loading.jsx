import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../assets/svg/loading.json'

function Loading() {
    return (
        <>
            <div className='absolute top-0 left-0 right-0 bottom-0 backdrop-blur-xl min-h-screen flex justify-center items-center'>
                <Lottie className='h-40' animationData={animationData} />
            </div>
        </>
    )
}

export default Loading