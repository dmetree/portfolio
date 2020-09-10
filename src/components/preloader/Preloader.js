import React, { Component } from 'react'
import s from './Preloader.module.css'
import Medal from '../../assets/imgs/medal.svg'
import { gsap } from "gsap"



class Preloader extends Component {
    componentDidMount() {

        gsap.to('#Medal', {
            duration: 1,
            rotation: 360,
            autoAlpha: 1
        });
        gsap.to('#preloader', {
            delay: 1,
            duration: .4,
            autoAlpha: 0
        })
        
    }

    render() {
        return (
            <div className={s.bgPreloader} id="preloader">
                <img src={Medal} alt="Medal" id="Medal"/>
            </div>
        )
    }
}

export default Preloader
