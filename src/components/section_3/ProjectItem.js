import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

function ProjectItem({ name, description, link }) {
    return (
        <Fragment>
            <div id="porto_1" className={s.portfolio_item}>
                <div className="">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
                <a
                    className={s.project_link}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Go to {name}
                        </a>
            </div>
        </Fragment>
    )
}

ProjectItem.propTypes = {

}

export default ProjectItem

