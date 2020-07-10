import React, { Component } from 'react'
import s from './Section_1.module.css'
import SplitText from './../../js/SplitText'
import { gsap } from "gsap";
import ScrollToPlugin from './../../js/ScrollToPlugin'

import chatIcon from '../../assets/imgs/chat.svg'
import arrowIcon from '../../assets/imgs/arrow.svg'
import UFO1 from '../../assets/imgs/ufo_bird.svg'
import UFO2 from '../../assets/imgs/ufo_bird2.svg'
import UFO3 from '../../assets/imgs/ufo_bird3.svg'


class Section_1 extends Component {
    componentDidMount() {
        // gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(ScrollToPlugin);

        let animateText = new gsap.timeline(),
            mySplitText = new SplitText("#intro", { type: "words,chars" }),
            chars = mySplitText.chars;

        gsap.set("#intro", { perspective: 400 });
        animateText.staggerFrom(chars, 1, { delay: 1, duration: 0.6, scale: 4, autoAlpha: 0, rotationX: -180, transformOrigin: "100% 50%", ease: "back.out", stagger: 0.02 });

        gsap.from("#action_btn", 1, { delay: 2, opacity: 0, x: -100 });
        gsap.from("#arrow", .5, { delay: 3, opacity: 0, y: 30 });

        // UFO on the move
        let moveUFO = () => {
            let animateUFOone = new gsap.timeline({ repeat: -1 });
            animateUFOone.to('#ufo_one', 7, { delay: 5, ease: "Power0.easeNone", rotationY: 720, rotationX: 360, transformOrigin: "140px -140px" })
            let animateUFOtwo = new gsap.timeline({ repeat: -1 });
            animateUFOtwo.to('#ufo_two', 12, { delay: 5, ease: "Power0.easeNone", rotationY: 1080, rotationX: 360, transformOrigin: "-140px 140px" })
            let animateUFOthree = new gsap.timeline({ repeat: -1 });
            animateUFOthree.to('#ufo_three', 12, { delay: 5, ease: "Power0.easeNone", rotationY: 360, rotationX: 720, transformOrigin: "-140px 140px" })
        }
        moveUFO();
    }


    btnClickhandler() {
        gsap.to(window, { duration: 2, scrollTo: "#myImg" });
    }
    
    render() {


        return (
            <div>
                <div className={s.space_bg_img}></div>

                <div className={s.ufo}>
                    <img src={UFO1} alt="UFO" id="ufo_one" className={s.comet_one} />
                    <img src={UFO2} alt="UFO" id="ufo_two" className={s.comet_two} />
                    <img src={UFO3} alt="UFO" id="ufo_three" className={s.comet_three} />
                </div>

                <a className={s.chat_icon}
                    href="mailto:demianbondarenko@gmail.com?Subject= to%20Dmitriy%20B.%20FrontendDeveloper&body=Hello%20Dmitriy!%20I%20saw%20your%20portfolio%20and%20I%20have%20an%20idea..."
                    target="_top">
                    <img className={s.chat_svg} src={chatIcon} alt="Chat" />
                </a>

                <div className={s.langSelector}>
                    <div className={s.currentLang}>EN</div>
                    <div className={s.langList}>
                        <div className={s.lang_1}></div>
                        <div className={s.land_2}></div>
                    </div>
                </div>


                <section className={s.intro}>
                    <div className={s.intro_profile}>

                        <h1 id="intro" className={s.introduction}>Hi, I'm Dmitriy Bondarenko<br />Frontend Developer</h1>
                        <button id="action_btn" onClick={this.btnClickhandler} className={s.intro_btn}>Let's get to know each other</button>
                        <img id="arrow" className={s.intro_arrow} src={arrowIcon} alt="Arrow" />

                    </div>
                </section>
            </div >
        )
    }
}

export default Section_1
