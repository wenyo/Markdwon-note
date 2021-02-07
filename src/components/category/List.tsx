import React from 'react';
import { ListInput } from './Category';

const List = (/*props: ListInput*/) => {
    return (
        <div className="List">
            <div className="title">
                <h4>STARRED</h4>
                <i className="icon-arrow-up"></i>
            </div>
            <ul>
                <li>
                    <i className="icon-start"></i>
                    <span>1111</span>
                </li>
                <li>
                    <i className="icon-start"></i>
                    <span>1111</span>
                </li>
                <li>
                    <i className="icon-start"></i>
                    <span>1111</span>
                </li>
            </ul>
        </div>
    );
};

export default List;
