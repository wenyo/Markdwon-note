import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import NoteContext from '../../context/NoteContext';
import BaseContext from '../../context/BaseContext';

const Tool = () => {
    // context
    const { setAlert, bModal } = useContext(BaseContext);
    const { iData, vData, setvData, vCollectionData } = useContext(NoteContext);

    // state
    const [sNoteName, setsNoteName] = useState('');
    const [iChooseColect, setiChooseColect] = useState(0);

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

    const textNote = (event: React.ChangeEvent<HTMLInputElement>) => {
        const sNewValue = event.currentTarget.value;
        if (`'"`.indexOf(sNewValue[sNewValue.length - 1]) > -1) return;
        setsNoteName(sNewValue);
    };

    const renewAlert = () => {
        setAlert(
            'Modal',
            true,
            <div className="content_column">
                <label>
                    <span>Collection /</span>
                    <select
                        value={iChooseColect}
                        onChange={(event) => setiChooseColect(parseInt(event.currentTarget.value))}
                    >
                        {vCollectionData.map(({ name }, idx) => (
                            <option key={idx} value={idx}>
                                {name}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    <span>Note /</span>
                    <input className="input-text" type="text" value={sNoteName} onChange={(event) => textNote(event)} />
                </label>
                <button className="btn-outline" onClick={addNote}>
                    SUBMIT
                </button>
            </div>,
            'New Note'
        );
    };

    const clickAdd = () => {
        renewAlert();
    };

    const addNote = () => {
        let vNewData = JSON.parse(JSON.stringify(vData));
        const vNewDataKey = Object.keys(vNewData);
        const iNewIdx: number = parseInt(vNewDataKey[vNewDataKey.length - 1]);
        vNewData[iNewIdx] = {
            name: sNoteName,
            collection: iChooseColect,
            starred: false,
            trash: false,
            updated_date: '2021/02/07 13:45',
            created_date: '2021/02/01 11:00',
            content: `# ${sNoteName}`,
        };
        setvData(vNewData);
        setAlert('Modal', false);
    };

    useEffect(() => {
        if (bModal) {
            renewAlert();
        }
    }, [sNoteName, iChooseColect]);

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
