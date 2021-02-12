import React from 'react';
import { vItemInput } from './Items';

const Item = (props: vItemInput) => {
    const { title, content, bStarred } = props;
    return (
        <>
            <h3>{title}</h3>
            {bStarred && <i className="icon-start"></i>}
            <p>{content}</p>
        </>
    );
};

export default Item;
