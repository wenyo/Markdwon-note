import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import NoteContext from '../../context/NoteContext';

const Tool = () => {
    const { iData, vData, vStarr, setvStarr } = useContext(NoteContext);

    const clickStar = () => {
        let vNewStart = JSON.parse(JSON.stringify(vStarr));
        for (const vStart of vNewStart) {
            
        }
    };

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
