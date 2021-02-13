import React, { useState } from 'react';
import { Provider, sActiveType } from './context/NoteContext';
import { vData as vDataDefault } from './json/Data';
import Category from './components/category/Category';
import Directory from './components/directory/Directory';
import Note from './components/note/Note';
import Shortcut from './components/shortcut/Shortcut';

function App() {
    //state
    const [iData, setiData] = useState(0); // note idx
    const [vData, setvData] = useState(vDataDefault);
    const [iActive, setiActive] = useState<number>(1); // category idx
    const [sType, setsType] = useState<string>(sActiveType[0]); // category type

    const chooseItem = (sType: string, idx: number) => {
        setsType(sType);
        setiActive(idx);
    };

    const Content = {
        vData,
        setvData,
        iData: iData,
        setiData,
        iActive,
        sType,
        chooseItem,
    };

    return (
        <Provider value={Content}>
            <div id="Wrap" className="Black">
                <Category />
                <Directory />
                <Note />
                {/* <Shortcut /> */}
            </div>
        </Provider>
    );
}

export default App;
