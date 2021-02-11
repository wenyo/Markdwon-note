// import react, react-markdown-editor-lite, and a markdown parser you like
import React, { useState } from 'react';
import * as ReactDOM from 'react-dom';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt({ breaks: true });

interface Type {
    html: string;
    text: string;
}

const Note = () => {
    const [vAlue, setvAlue] = useState('# TiTle');

    // Finish!
    function handleEditorChange(e: Type) {
        console.log('handleEditorChange', e);
        // setvAlue()
    }

    return (
        <MdEditor
            id="Note"
            value={vAlue}
            style={{ height: '100vh', width: 'calc( 100vw - 500px )' }}
            renderHTML={(text) => mdParser.render(`${text}`)}
            onChange={(e) => handleEditorChange(e)}
        />
    );
};

export default Note;
