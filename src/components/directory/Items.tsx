import React, { useContext } from 'react';
import Item from './Item';
import NoteContext from '../../context/NoteContext';

export interface vItemInput {
    title: string;
    content: string;
    bStarred: boolean;
}

const Items = () => {
    //context
    const { vData, setiData, iData } = useContext(NoteContext);

    return (
        <div id="Items" className="scrollbarCol">
            {Object.keys(vData).map((id) => {
                const className = iData === parseInt(id) ? 'active' : '';
                const iId = parseInt(id);
                const title = vData[iId].name;
                const bStarred = vData[iId].starred;
                const content = 'The note with a star would be organized to the category named “STARRED”.';
                return (
                    <div key={id} className={`content ${className}`} onClick={() => setiData(parseInt(id))}>
                        <Item title={title} content={content} bStarred={bStarred}/>
                    </div>
                );
            })}
        </div>
    );
};

export default Items;
