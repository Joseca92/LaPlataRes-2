import React from 'react'
import notfound from '../asset/img/notfound.jpg'


const Error404 = () => {
  return (
    <div >
        <div>
            <div>
                <img className='rounded mx-auto d-block' src={notfound}/>
            </div>
        </div>
    </div>
  )
}

export default Error404