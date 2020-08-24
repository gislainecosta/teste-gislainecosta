import React, {useState} from 'react';

import './index.css';
import Arrow from '../../img/arrowDown.png';
import Photo1 from '../../img/photo3.jpg';
import Photo2 from '../../img/photo4.jpg';
import Photo3 from '../../img/photo5.jpg';
import Nav1 from '../../img/nav1.png';
import Nav2 from '../../img/nav2.png';

const Section3 =()=>{
    const [currentImage, setCurrentImage] = useState(1);
    
    let photo
    if (currentImage === 1){
        photo = Photo1
    } else if (currentImage === 2){
        photo = Photo2
    }else{
        photo = Photo3
    }

    let width
    let currentPhoto
    if(window.screen.width > 900){
        width = 625
    }else{
        width = 320
    }
    
    const goToPhoto = (number) =>{
        setCurrentImage(number)
        if(currentImage === number){
            return currentPhoto = Nav1
        }else{
            return currentPhoto = Nav2
        }
    }
    
    return(
        <div id='section1'>
            <section id='header'>
                <section id='text-header'>
                    <h1>LOREM IPSUM</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </section>
                <img onClick={() => window.scrollTo({ top: width })} src={Arrow} alt='Arrow' />
            </section>
            <img src={photo} />
            <section id='nav-section1'>
                <img onClick={()=>{goToPhoto(1)}} src={currentImage === 1 ? Nav1 : Nav2}/>
                <img onClick={()=>{goToPhoto(2)}} src={currentImage === 2 ? Nav1 : Nav2} />
                <img onClick={()=>{goToPhoto(3)}} src={currentImage === 3 ? Nav1 : Nav2} />
            </section>
        </div>
    )
}

export default Section3;