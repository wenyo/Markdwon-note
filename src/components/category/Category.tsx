import React, { useState } from 'react';
import { Provider } from '../../context/CategoryContext';
import List from './List';

enum sActiveType {
    STARRED,
    COLLECTIONS,
    TRASH,
    NONE,
}

const vIcon = [<i className="icon-start"></i>, <i className="icon-description"></i>, <i className="icon-remove"></i>];
export interface ListInput {
    sTitle: string;
    Icon: JSX.Element;
    vList: string[];
    iActive: number;
}

const Category = () => {
    const [iActive, setiActive] = useState<number>(1);
    const [sType, setsType] = useState<string>(sActiveType[0]);

    const chooseItem = (sType: string, idx: number) => {
        setsType(sType);
        setiActive(idx);
    };

    const ContexntValue = {
        chooseItem,
    };

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
                            sTitle={sActiveType[idx]}
                            Icon={icon}
                            vList={['AAAA', 'BBB', 'AAAA', 'BBB', 'AAAA', 'BBB', 'AAAA', 'BBB']}
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
