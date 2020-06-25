import React, { Component } from 'react'
import s from './Section_4.module.css'

import ScrollTrigger from './../../js/ScrollTrigger'
import { gsap, } from "gsap"

import Medal from '../../assets/imgs/medal.svg'
import Email from '../../assets/imgs/media_email_50.png'
import Github from '../../assets/imgs/media_github_50.png'
import LinkedIn from '../../assets/imgs/media_linkedin_50.png'
import Skype from '../../assets/imgs/media_skype_50.png'




class Section_4 extends Component {
    componentDidMount(){
        gsap.registerPlugin(ScrollTrigger);

        gsap.from("#workTogether", {
            scrollTrigger: {
                trigger: "#workTogether",
                toggleActions: "play none none none",
                start: "top, +=500",
                end: "+=200"
            },
            duration: .3,
            rotation: -5,
            scale: 0.9,
            autoAlpha: 0
        });

    }

    render(){
    return (
        <div>
            <section className={s.section_4}>
                <img className={s.medal} src={Medal} alt="Medal" />
                <div id="workTogether" className={s.final}>

                    <div className={s.workTogether}>
                        <h2 className={s.workTogether_header}>Start a project?</h2>
                        <p className={s.workTogether_p}>You'd like to work together?<br/> Let's have a chat</p>
                        <a className={s.workTogether_chat} 
                        href="skype:james86here?chat">
                            <h3 className={s.workTogether_call}>Chat</h3>
                            
                        </a>
                    </div>
                </div>

                {/* <h3 className={s.quote}>"A journey of a thousand miles starts with one step."</h3> */}
                <div className={s.media}>

                    
                    <a href="skype:james86here?chat">
                        <img className={s.media_item} src={Skype} alt="Skype" />
                    </a>

                    <a className={s.chat_icon}
                        href="https://github.com/dmetree"
                        target="_top">
                        <img className={s.media_item} src={Github} alt="Github" />
                    </a>

                    <a className={s.chat_icon}
                        href="https://www.linkedin.com/in/dmitriy-bondarenko-9894b0190/"
                        target="_top">
                        <img className={s.media_item} src={LinkedIn} alt="LinkedIn" />
                    </a>

                    <a className={s.chat_icon}
                        href="mailto:demianbondarenko@gmail.com"
                        target="_top">
                        <img className={s.media_item} src={Email} alt="Email" />
                    </a>
                </div>
                <p className={s.copyright}>&copy; Created by me</p>
            </section>
        </div>
    )
    }
}

export default Section_4
