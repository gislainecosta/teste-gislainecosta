import React, {useState, useEffect} from 'react';
import Left from '../../img/arrowLeft.png'
import Right from '../../img/arrowRight.png'

import './index.css'
import Photo from '../PhotoSection2'

const Section2 =()=>{
    const [atualPage, setAtualPage] = useState(1)
    const [screenList, setScreenList] = useState([])
    const [list] = useState([
        {
            id: 1,
            adress: 'https://picsum.photos/id/237/300/200',
            title: 'LOREM IPSUM',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
        },
        {
            id: 2,
            adress: 'https://picsum.photos/id/1025/300/200',
            title: 'LOREM IPSUM',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
        },
        {
            id: 3,
            adress: 'https://picsum.photos/id/1062/300/200',
            title: 'LOREM IPSUM',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
        },
        {
            id: 4,
            adress: 'https://picsum.photos/id/1083/300/200',
            title: 'LOREM IPSUM',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
        },
        {
            id: 5,
            adress: 'https://picsum.photos/id/1070/300/200',
            title: 'LOREM IPSUM',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
        },
        {
            id: 6,
            adress: 'https://picsum.photos/id/103/300/200',
            title: 'LOREM IPSUM',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
        },
        {
            id: 7,
            adress: 'https://picsum.photos/id/1080/300/200',
            title: 'LOREM IPSUM',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
        },
        {
            id: 8,
            adress: 'https://picsum.photos/id/139/300/200',
            title: 'LOREM IPSUM',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
        },
        {
            id: 9,
            adress: 'https://picsum.photos/id/225/300/200',
            title: 'LOREM IPSUM',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
        }
    ])

    useEffect(()=>{
        window.screen.width > 900 ? refreshListDesktop() : refreshListMobile()
    }, [atualPage, window.screen.width])

    const refreshListMobile =() =>{
        const photoListMobile = list.filter((photo) => {
            return photo.id === atualPage
        })
        setScreenList(photoListMobile)
    }

    const refreshListDesktop = () => {
        const photoListDesktop = list.filter((photo) => {
            return (photo.id >= atualPage && photo.id < (atualPage + 3))
        })
        setScreenList(photoListDesktop)
    }
    
    const photoList = screenList.map((photo) => {
        return <Photo key={photo.id} title={photo.title} adress={photo.adress} text={photo.text} />
    })
    
    const nextPage = () =>{
        if (window.screen.width > 900){
            if (atualPage === 7) {
                setAtualPage(1)
            } else {
                setAtualPage(atualPage + 3)
            }
        }else{
            if (atualPage === 9) {
                setAtualPage(1)
            } else {
                setAtualPage(atualPage + 1)
            }
        }
    }

    const previousPage = () => {
        if (window.screen.width > 900) {
            if (atualPage === 1) {
                setAtualPage(7)
            } else {
                setAtualPage(atualPage -3)
            }
        } else {
            if (atualPage === 1) {
                setAtualPage(9)
            } else {
                setAtualPage(atualPage - 1)
            }
        }
    }

    let desktop
    if (window.screen.width > 900) {
        return desktop = <div id='section2'>
            <img onClick={previousPage} src={Left} alt='Arrow' />
            {photoList}
            <img onClick={nextPage} src={Right} alt='Arrow' />
        </div>
    } else {
        desktop = <div id='section2'>
            {photoList}
            <section>
                <img onClick={previousPage} src={Left} alt='Arrow' />
                <img onClick={nextPage} src={Right} alt='Arrow' />
            </section>
        </div>
    }

    return(
        <section>{desktop}</section>
    )
}

export default Section2;