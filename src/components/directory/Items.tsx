import React, { useContext } from 'react';
import Item from './Item';
import NoteContext from '../../context/NoteContext';

export interface vItemInput {
    title: string;
    content: string;
}

const Items = () => {
    //context
    const { vData } = useContext(NoteContext);

    return (
        <div id="Items">
            {Object.keys(vData).map((id) => {
                const iId = parseInt(id);
                const title = vData[iId].name;
                const content = 'The note with a star would be organized to the category named “STARRED”.';
                return <Item key={id} title={title} content={content} />;
            })}
        </div>
    );
};

export default Items;
