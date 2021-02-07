import React from 'react';
import List from './List';

export interface ListInput {
    sTitle: string;
    icon: JSX.Element;
    sList: string[];
}

const Category = () => {
    return (
        <div id="Category">
            <div className="content">
                <List />
                <List />
            </div>
        </div>
    );
};

export default Category;
