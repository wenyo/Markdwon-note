import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import NoteContext from '../../context/NoteContext';

const Tool = () => {
    const { iData, vData, setvData } = useContext(NoteContext);

    const clickStar = () => {
        let vNewData = JSON.parse(JSON.stringify(vData));
        vNewData[iData].starred = !vNewData[iData].starred;
        setvData(vNewData);
    };

    const clickTrash = () => {
        let vNewData = JSON.parse(JSON.stringify(vData));
        vNewData[iData].trash = !vNewData[iData].trash;
        vNewData[iData].starred = false;
        setvData(vNewData);
    };

    const clickAdd = () => {
        // let vNewData = JSON.parse(JSON.stringify(vData));
        // vNewData[vNewData.length] = {
        //     name: 'Untitle note',
        //     collection: 1,
        //     starred: false,
        //     trash: true,
        //     updated_date: '2021/02/07 13:45',
        //     created_date: '2021/02/01 11:00',
        //     content: `# Untitle note`,
        // }
    };

    return (
        <div id="Tool" className="content">
            <div>
                <FontAwesomeIcon icon={faGithub} />
            </div>
            <div>
                <i className="icon-delete" onClick={clickTrash}></i>
                <i className="icon-start" onClick={clickStar}></i>
                <i className="icon-add" onClick={clickAdd}></i>
            </div>
        </div>
    );
};

export default Tool;
