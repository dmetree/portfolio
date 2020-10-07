import React, {Component} from 'react'
import s from './Section_2.module.css'
import { gsap, } from "gsap";
import ScrollTrigger from './../../js/ScrollTrigger'

import MyImg from '../../assets/imgs/Dmitriy_circle.png'
import Medal from '../../assets/imgs/medal.svg'

class Section_2 extends Component {

    componentDidMount(){
        gsap.registerPlugin(ScrollTrigger);

        gsap.from("#myImg", {
            scrollTrigger: {
                trigger: "#myImg", 
                toggleActions: "play none none none",
                // markers: true,
                // indicators of the beginning and ending of the animation
                // scrub: true,
                // scrub - animation follows mouse moves
                start: "top, +=500"
            }, 
            opacity: 0,  
            autoAlpha: 0,
            x: -80
        });   
        



        gsap.from("#do_item_1", {
            scrollTrigger: {
                trigger:"#do_item_1",
                toggleActions: "play none none none",
                start: "top, +=500",
                end: "+=200"
            },
            duration: .3,
            rotation: -25,
            scale: 0.7,
            autoAlpha: 0
        });

        gsap.from("#do_item_2", {
            scrollTrigger: {
                trigger: "#do_item_2",
                toggleActions: "play none none none",
                start: "top, +=500",
                end: "+=200"
            },
            duration: .3,
            rotation: -25,
            delay: .2,
            scale: 0.7,
            autoAlpha: 0
        });

        gsap.from("#do_item_3", {
            scrollTrigger: {
                trigger: "#do_item_3",
                toggleActions: "play none none none",
                start: "top, +=500",
                end: "+=200"
            },
            duration: .3,
            rotation: -25,
            delay: .4,
            scale: 0.7,
            autoAlpha: 0
        });

        gsap.from("#do_item_4", {
            scrollTrigger: {
                trigger: "#do_item_4",
                toggleActions: "play none none none",
                start: "top, +=500",
                end: "+=200"
            },
            duration: .3,
            rotation: -25,
            scale: 0.7,
            autoAlpha: 0
        });
    }


    render (){

    return (
        <div>
            <section className={s.section_2}>
                <div className={s.my_image_wrapper}>
                    <img id="myImg" className={s.my_image} src={MyImg} alt="MyImg" />
                </div>

                <div  className={s.do_items}>
                    <div id="do_item_1" className={s.do_item}>
                        <img className={s.do_item_medal} src={Medal} alt="Medal"/>
                        <h3 className={s.do_item_h3}>What can I do for you?</h3>

                        <p className={s.do_item_p}>I create landing pages and SPAs on React with very nice animations. If you need a professional website or if you have a complex project in mind feel free to write to me. I'm open to startups and ideas (:
                        </p>
                    </div>


                    <div id="do_item_2" className={s.do_item}>
                        <img className={s.do_item_medal} src={Medal} alt="Medal" />
                        <h3 className={s.do_item_h3}>What do I use?</h3>
                        <div className={s.do_item_p}>
                            <ul className={s.do_ul}>
                                <li>HTML5, CSS3, JavaScript</li>
                                <li>React and Redux-Thunk</li>
                                <li>Tailwind or CSS modules</li>
                                <li>Sketch, Figma, Adobe XD</li>
                            </ul>
                            <p>I would usually create animations with GSAP or CSS</p> 
                        </div>
                    </div>



                    <div id="do_item_3" className={s.do_item}>
                        <img className={s.do_item_medal} src={Medal} alt="Medal" />
                        <h3 className={s.do_item_h3}>About me?</h3>
                        <p className={s.do_item_p}>I started to code in 2016. For now I have about 4 years of experiance in Frontend. I tried other trades before that. So it's a long journy with many ups and downs.</p>
                    </div>

                    
                </div>

                <div id="do_item_4" className={s.do_item}>
                    <img className={s.do_item_medal} src={Medal} alt="Medal" />
                    <h3 className={s.do_item_h3}>Mentorship?</h3>
                    <p className={s.do_item_p}>If you want to become a frontend developer or if you'd like to know more about this trade, just let me know. There're many snakes and ladders you might want to know about (:</p>
                </div>
            </section>
        </div>
    )
    }
}

export default Section_2
