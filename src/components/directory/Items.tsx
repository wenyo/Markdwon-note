import React, { useContext, useEffect, useState } from 'react';
import Item from './Item';
import NoteContext, { sActiveType } from '../../context/NoteContext';

export interface vItemInput {
    title: string;
    content: string;
    bStarred: boolean;
}

const Items = () => {
    //context
    const { vData, setiData, iData, iActive, sType } = useContext(NoteContext);

    // state
    const [vShowData, setvShowData] = useState<number[]>([]);
    useEffect(() => {
        let vNewData: number[] = [];
        switch (sType) {
            case sActiveType[1]:
                vNewData = Object.keys(vData)
                    .filter((id) => {
                        return !vData[parseInt(id)].trash && vData[parseInt(id)].collection === iActive;
                    })
                    .map((id) => parseInt(id));
                break;
            case sActiveType[0]:
            case sActiveType[2]:
                vNewData = [iActive];
                break;
            default:
                break;
        }

        const iNewData = vNewData.length === 0 ? -1 : vNewData[0];

        setvShowData(vNewData);
        setiData(iNewData);
    }, [sType, iActive]);

    return (
        <div id="Items" className="scrollbarCol">
            {vShowData.map((id) => {
                const className = iData === id ? 'active' : '';
                const title = vData[id].name;
                const bStarred = vData[id].starred;
                const content = 'The note with a star would be organized to the category named “STARRED”.';
                return (
                    <div key={id} className={`content ${className}`} onClick={() => setiData(id)}>
                        <Item title={title} content={content} bStarred={bStarred} />
                    </div>
                );
            })}
        </div>
    );
};

export default Items;
