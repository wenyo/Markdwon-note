import React, { useState, useContext } from 'react';
import NoteContext from '../../context/NoteContext';

import { ListInput } from './Category';

const List = (props: ListInput) => {
    // props
    const { sTitle, Icon, vList, iActive } = props;

    //context
    const { chooseItem } = useContext(NoteContext);

    //state
    const [bShow, setbShow] = useState<boolean>(true);

    const clickShow = () => {
        setbShow((prevState) => !prevState);
    };

    return (
        <div className="List">
            <div className="vice-title" onClick={clickShow}>
                <h4>{sTitle}</h4>
                {bShow ? <i className="icon-arrow-up"></i> : <i className="icon-arrow-down"></i>}
            </div>
            <ul>
                {vList.length > 0 &&
                    bShow &&
                    vList.map((vList, idx) => (
                        <li
                            key={idx}
                            onClick={() => chooseItem(sTitle, vList.id)}
                            className={vList.id === iActive ? 'active' : ''}
                        >
                            {Icon}
                            <span>{vList.name}</span>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default List;
