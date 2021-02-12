import React, { useState } from 'react';
import { Provider } from './context/NoteContext';
import { vData as vDataDefault } from './json/Data';
import Category from './components/category/Category';
import Directory from './components/directory/Directory';
import Note from './components/note/Note';
import Shortcut from './components/shortcut/Shortcut';

function App() {
    //state
    const [iData, setiData] = useState(0);
    const [vData, setvData] = useState(vDataDefault);

    const Content = {
        vData,
        setvData,
        iData: iData,
        setiData,
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
