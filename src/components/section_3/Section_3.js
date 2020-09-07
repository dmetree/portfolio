import React, { Component } from 'react'

import s from './Section_3.module.css'
import { gsap, } from "gsap"
import ScrollTrigger from './../../js/ScrollTrigger'
import SplitText from './../../js/SplitText'

class Section_3 extends Component {

    componentDidMount(){
        gsap.registerPlugin(ScrollTrigger);

        // let animateText = new gsap.timeline(),
        //     mySplitText = new SplitText("#s3h2", { type: "words,chars" }),
        //     chars = mySplitText.chars;

        // gsap.set("#s3h2", { perspective: 400 });
        // animateText.staggerFrom(chars, 1, { delay: 1, duration: 0.6, scale: 4, autoAlpha: 0, rotationX: -180, transformOrigin: "100% 50%", ease: "back.out", stagger: 0.02 });

        gsap.from("#s3h2", {
            scrollTrigger: {
                trigger: "#s3h2",
                toggleActions: "play none none none",
                start: "top, +=500"
            },
            autoAlpha: 0,
            x: -80
        });  

        gsap.from("#porto_1", {
            scrollTrigger: {
                trigger: "#porto_1",
                toggleActions: "play none none none",
                start: "top, +=500",
                end: "+=200"
            },
            duration: .3,
            rotation: -25,
            scale: 0.7,
            autoAlpha: 0
        });

        gsap.from("#porto_2", {
            scrollTrigger: {
                trigger: "#porto_2",
                toggleActions: "play none none none",
                start: "top, +=500",
                // markers: true,
                end: "+=200"
            },
            duration: .3,
            rotation: -25,
            scale: 0.7,
            autoAlpha: 0
        });


        gsap.from("#porto_3", {
            scrollTrigger: {
                trigger: "#porto_3",
                toggleActions: "play none none none",
                start: "top, +=500",
                end: "+=200"
            },
            duration: .3,
            rotation: -25,
            scale: 0.7,
            autoAlpha: 0
        });

        gsap.from("#porto_4", {
            scrollTrigger: {
                trigger: "#porto_4",
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
            <section className={s.section_3}>
                <h2 id="s3h2" className={s.h2}>My portfolio</h2>
                <div className={s.portfolio_items}>
                    
                    <div id="porto_1" className={s.portfolio_item}>
                        <div className="">
                            <h3>Chat App</h3>
                            <p>Is build with React and Socket.io, and backend on Node.js. Users can sign in and chat here.</p>
                        </div>
                        <a
                            className={s.project_link}
                            href="https://react-chatting.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Go to Chat App
                        </a>
                    </div>

                    <div id="porto_2" className={s.portfolio_item}>
                        
                        <div className="">
                            <h3>Movie DB</h3>
                            <p>This projest is build with Redux and Redux-thunk. Interface is created with Tailwind. It fetches data from MovieDB API. </p>
                        </div>
                        
                        <a className={s.project_link}
                            href="https://dmetree.github.io/tt-moviedb/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Go to Movie DB
                        </a>
                    </div>


                    <div className={s.portfolio_items}>
                        <div id="porto_3" className={s.portfolio_item}>
                            <div className="">
                                <h3>Diletant</h3>
                                <p>This project is build with React and Redux, it uses hardcoded data. Data can be filtered and searched through. Redux store is used as the single source of truth.</p>
                            </div>
                            <a
                                className={s.project_link}
                                href="https://dmetree.github.io/tt-diletant/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Go to Diletant
                            </a>
                        </div>

                        <div id="porto_4" className={s.portfolio_item}>
                            <div className="">
                                <h3>Burger Builder</h3>
                                <p>This project is build with React and Redux-thunk, has user authentiacation and backend at firebase. Users can sign in or login, create orders. Orders are stored in the backend.</p>
                            </div>
                            <a
                                className={s.project_link}
                                href="https://dmetree.github.io/react-burger/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Go to Burger Builder
                        </a>
                        </div>

                    </div>


                </div>
            </section>
        </div>
    )
    }
}

export default Section_3
