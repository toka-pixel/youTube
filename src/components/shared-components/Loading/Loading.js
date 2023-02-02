import React from 'react';
import './Loading.scss';

const Loading = () => {

    return (
        <div className='loading'>
            <img className='loadImg' src='/imgs/loading.svg' />
            <p>loading</p>
        </div>
    )
}


export default Loading;