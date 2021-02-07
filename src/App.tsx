import React from 'react';
import Category from './components/category/Category';
import Directory from './components/directory/Directory';
import Note from './components/note/Note';
import Shortcut from './components/shortcut/Shortcut';

function App() {
    return (
        <div id="Wrap" className="Black">
            <Category />
            <Directory />
            <Note />
            <Shortcut />
        </div>
    );
}

export default App;
