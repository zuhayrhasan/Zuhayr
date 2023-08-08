import React from 'react';

const Project = ({ projectName, projectImage, projectDesc, projectTech, projectLink }) => {
    return (
        <div className="project-parent">
            <div className="project">
                <img src={projectImage} alt={projectName} />
                <div className="bottom-box">
                    <div className="bottom-box-text">
                        <h3 className="project-name">{projectName}</h3>
                        <h5 className="project-desc">{projectDesc}</h5>
                        <div className="project-tech">
                            {projectTech.map((tech, index) => (
                                <h5 key={index} className="tech">{tech}</h5>
                            ))}
                        </div>
                    </div>
                    <div className="bottom-box-buttons">
                        {projectLink ? (
                            <a href={projectLink} className="project-link" target="_blank" rel="noopener noreferrer">LINK</a>
                        ) : (
                            <div className="project-link">Request Demo</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
     
    );
};

export default Project;
