import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Tool = () => {
    return (
        <div id="Tool" className="content">
            <div>
                <FontAwesomeIcon icon={faGithub} />
            </div>
            <div>
                <i className="icon-delete"></i>
                <i className="icon-start"></i>
                <i className="icon-add"></i>
            </div>
        </div>
    );
};

export default Tool;
