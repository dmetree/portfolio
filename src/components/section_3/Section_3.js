import React, { useEffect } from 'react'
import s from './Section_3.module.css'
import { gsap, } from "gsap"
import ScrollTrigger from './../../js/ScrollTrigger'
import { projects } from './ProjectsData'



const Section_3 = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

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

        gsap.from("#porto_5", {
            scrollTrigger: {
                trigger: "#porto_5",
                toggleActions: "play none none none",
                start: "top, +=500",
                end: "+=200"
            },
            duration: .3,
            rotation: -25,
            scale: 0.7,
            autoAlpha: 0
        });

         gsap.from("#porto_6", {
            scrollTrigger: {
                trigger: "#porto_5",
                toggleActions: "play none none none",
                start: "top, +=500",
                end: "+=200"
            },
            duration: .3,
            rotation: -25,
            scale: 0.7,
            autoAlpha: 0
        });
    }, [])





    let itemsList = projects.map(project => {
        return(
            <div id={project.id} className={s.portfolio_item}>
                <div className="">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
                <a
                    className={s.project_link}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Go to {project.name}
                </a>
            </div>
        )
    }) 



    return (
        <div>
            <section className={s.section_3}>
                <h2 id="s3h2" className={s.h2}>My portfolio</h2>
                <div className={s.portfolio_items}>
                    {itemsList}
                </div>
            </section>
        </div>
    )
}

export default Section_3
