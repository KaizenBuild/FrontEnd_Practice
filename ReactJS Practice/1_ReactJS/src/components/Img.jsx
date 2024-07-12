import React from 'react'
import house from '../images/house.jpg'
import plant from '../images/plant.jpg'
import statue from '../images/statue.jpg'

const Img = () => {
    return (
        <div>
            <div className="i">
                <img src={house} alt="house" width="300" />
                <img src={plant} alt="plant" width="300" />
                <img src={statue} alt="statue" width="300" />
            </div>
        </div>
    )
}

export default Img
