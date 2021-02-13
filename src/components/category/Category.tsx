import React, { useState, useEffect, useContext } from 'react';
import { Provider } from '../../context/CategoryContext';
import { vList } from '../../context/NoteContext';
import List from './List';
import NoteContext, { sActiveType } from '../../context/NoteContext';

const vIcon = [<i className="icon-start"></i>, <i className="icon-description"></i>, <i className="icon-remove"></i>];

export interface ListInput {
    sTitle: string;
    Icon: JSX.Element;
    vList: vList[];
    iActive: number;
}

const vDefault: vList[] = [
    { name: 'Home', id: 0 },
    { name: 'Work', id: 1 },
    { name: 'Project', id: 2 },
];

const Category = () => {
    // context
    const { vData, iActive, sType } = useContext(NoteContext);

    // state
    const [vCollection, setvCollection] = useState<vList[]>(vDefault);
    const [vStarr, setvStarr] = useState<vList[]>([]);
    const [vTrash, setvTrash] = useState<vList[]>([]);

    const ContexntValue = {
        vCollection,
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

                <div className="content">
                    <i className="icon-library-add"></i>
                    <span>New Collection</span>
                </div>
            </div>
        </Provider>
    );
};

export default Category;
