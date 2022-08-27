import React from 'react'
import notfound from '../asset/img/notfound.jpg'
import "../css/error.css"

const Error404 = () => {
  return (
    <div className='er' >
        <div>
            <div>
                <img className='rounded mx-auto d-block' src={notfound}/>
            </div>
        </div>
    </div>
  )
}

export default Error404