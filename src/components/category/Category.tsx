import React, { useState, useEffect, useContext } from 'react';
import { Provider } from '../../context/CategoryContext';
import { vCollectionData } from '../../context/NoteContext';
import List from './List';
import NoteContext, { sActiveType } from '../../context/NoteContext';
import BaseContext from '../../context/BaseContext';

interface vDataType {
    [x: number]: {
        name: string;
        [x: number]: any;
    };
}

const vIcon = [<i className="icon-start"></i>, <i className="icon-description"></i>, <i className="icon-remove"></i>];

export interface ListInput {
    sTitle: string;
    Icon: JSX.Element;
    vList: string[];
    iActive: number;
    vData: vDataType;
}

const Category = () => {
    // context
    const { setAlert, bModal } = useContext(BaseContext);
    const {
        vData,
        iActive,
        sType,
        vCollection,
        setvCollection,
        vStarr,
        setvStarr,
        vTrash,
        setvTrash,
        setvCollectionData,
        vCollectionData,
    } = useContext(NoteContext);

    // state
    const [sNewCollection, setsNewCollection] = useState('');

    const ContexntValue = {
        vCollection,
    };

    const addCollection = () => {
        if (sNewCollection === '') return;
        let vNewCollectionData = JSON.parse(JSON.stringify(vCollectionData));
        vNewCollectionData.push({ name: sNewCollection });
        vCollection.push(vCollection.length.toString());
        setvCollectionData(vNewCollectionData);
        setvCollection(vCollection);
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
        let vNewStarr: string[] = [];
        let vNewTrash: string[] = [];
        for (const id in vData) {
            const data = vData[id];
            if (data.trash) {
                vNewTrash.push(id);
            } else if (data.starred) {
                vNewStarr.push(id);
            }
        }
        setvTrash(vNewTrash);
        setvStarr(vNewStarr);
    }, [vData]);

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
                            vData={
                                sActiveType[0] === sActiveType[idx]
                                    ? vData
                                    : sActiveType[1] === sActiveType[idx]
                                    ? vCollectionData
                                    : sActiveType[2] === sActiveType[idx]
                                    ? vData
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
