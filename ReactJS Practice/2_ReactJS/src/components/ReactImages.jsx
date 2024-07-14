import React from 'react'
import img1 from '../images/war.jpg'
import img2 from '../images/box.jpg'
import img3 from '../images/car.jpg'
import img4 from '../images/bike.jpg'

import { img } from '../components/Img'

const ReactImages = () => {
    return (
        <div>
            <br />
            <div>
                <h3 style={{ textAlign: "center" }}>Images from Local Folder</h3> <br />
                <div className='imgContainer'>
                    <img src={img1} alt="war" />
                    <img src={img2} alt="box" />
                    <img src={img3} alt="car" />
                    <img src={img4} alt="bike" />
                </div>
            </div>
            <br />

            {/* ---------------------------------------------------------------------------------- */}



            <div>
                <h3 style={{ textAlign: "center" }}>Importing Images from Online</h3> <br />
                <div className='imgContainer'>
                    {img.map((v, i) => {
                        console.log(v);
                        return (<img src={v.img} key={i}></img>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default ReactImages
