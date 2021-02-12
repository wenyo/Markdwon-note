import React from 'react';
import { vItemInput } from './Items';

const Item = (props: vItemInput) => {
    const { title, content } = props;
    return (
        <>
            <h3>{title}</h3>
            <p>{content}</p>
        </>
    );
};

export default Item;
