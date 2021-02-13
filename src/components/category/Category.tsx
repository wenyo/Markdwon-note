import React, { useState, useEffect, useContext } from 'react';
import { Provider } from '../../context/CategoryContext';
import { vList } from '../../context/NoteContext';
import List from './List';
import NoteContext, { sActiveType } from '../../context/NoteContext';
import BaseContext from '../../context/BaseContext';

const vIcon = [<i className="icon-start"></i>, <i className="icon-description"></i>, <i className="icon-remove"></i>];

export interface ListInput {
    sTitle: string;
    Icon: JSX.Element;
    vList: vList[];
    iActive: number;
}

const Category = () => {
    // context
    const { setAlert, bModal } = useContext(BaseContext);
    const { vData, iActive, sType, vCollection, setvCollection } = useContext(NoteContext);

    // state
    const [vStarr, setvStarr] = useState<vList[]>([]);
    const [vTrash, setvTrash] = useState<vList[]>([]);
    const [sNewCollection, setsNewCollection] = useState('');

    const ContexntValue = {
        vCollection,
    };

    const addCollection = () => {
        if (sNewCollection === '') return;
        let vNewCollection = JSON.parse(JSON.stringify(vCollection));
        const iNewIdx = vNewCollection.length;
        vNewCollection.push({ name: sNewCollection, id: iNewIdx });
        setvCollection(vNewCollection);
        setAlert('Modal', false);
    };

    const textCollection = (event: React.ChangeEvent<HTMLInputElement>) => {
        setsNewCollection(event.target.value);
    };

    const renewAlert = () => {
        setAlert(
            'Modal',
            true,
            <>
                <input
                    className="input-text"
                    type="text"
                    value={sNewCollection}
                    onChange={(event) => textCollection(event)}
                />
                <button className="btn-outline" onClick={addCollection}>
                    SUBMIT
                </button>
            </>,
            'New Collection'
        );
    };

    const clickNewCollection = () => {
        renewAlert();
    };

    useEffect(() => {
        let vNewStarr: vList[] = [];
        let vNewTrash: vList[] = [];
        for (const id in vData) {
            const data = vData[id];
            if (data.trash) {
                vNewTrash.push({ name: data.name, id: parseInt(id) });
            } else if (data.starred) {
                vNewStarr.push({ name: data.name, id: parseInt(id) });
            }
        }
        setvTrash(vNewTrash);
        setvStarr(vNewStarr);
    }, []);

    useEffect(() => {
        if (bModal) {
            renewAlert();
        }
    }, [sNewCollection]);

    return (
        <Provider value={ContexntValue}>
            <div id="Category">
                <div className="title content">
                    <img src="img/Path 94.svg" alt="" />
                    <label id="theme">
                        <input type="checkbox" />
                        <div></div>
                    </label>
                </div>
                <div className="content scrollbarCol">
                    {vIcon.map((icon, idx) => (
                        <List
                            key={idx}
                            sTitle={sActiveType[idx]}
                            Icon={icon}
                            vList={
                                sActiveType[0] === sActiveType[idx]
                                    ? vStarr
                                    : sActiveType[1] === sActiveType[idx]
                                    ? vCollection
                                    : sActiveType[2] === sActiveType[idx]
                                    ? vTrash
                                    : []
                            }
                            iActive={sType === sActiveType[idx] ? iActive : -1}
                        />
                    ))}
                </div>

                <div className="content" onClick={clickNewCollection}>
                    <i className="icon-library-add"></i>
                    <span>New Collection</span>
                </div>
            </div>
        </Provider>
    );
};

export default Category;
