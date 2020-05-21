import React from 'react'
import s from './Section_1.module.css'


import chatIcon from '../../assets/imgs/chat.svg'
import arrowIcon from '../../assets/imgs/arrow.svg'


function Section_1() {
    return (
        <div>
            <div className={s.space_bg_img}></div>
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

                    <h1 id="introduction" className={s.introduction}>Hi, I'm Dmitriy Bondarenko<br />Frontend Developer</h1>

                    <button id="intro_btn" className={s.intro_btn}>Let's get to know each other</button>
                    <div className={s.intro_arrow}>
                        <img className={s.intro_arrow_svg} src={arrowIcon} alt="Arrow" />
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Section_1
