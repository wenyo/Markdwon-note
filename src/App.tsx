import React from 'react';
import { Provider } from './context/NoteContext';
import { vData } from './json/Data';
import Category from './components/category/Category';
import Directory from './components/directory/Directory';
import Note from './components/note/Note';
import Shortcut from './components/shortcut/Shortcut';

function App() {
    const Content = {
        vData,
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
