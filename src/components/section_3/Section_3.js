import React from 'react'

import s from './Section_3.module.css'

function Section_3() {
    return (
        <div>
            <section className={s.section_3}>
                <h2 className={s.h2}>My portfolio</h2>
                <div className={s.portfolio_items}>
                    <div className={s.portfolio_item}>
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
                    <div className={s.portfolio_item}>
                        
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
                    <div className={s.portfolio_item}>
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
                </div>

            </section>
        </div>
    )
}

export default Section_3
