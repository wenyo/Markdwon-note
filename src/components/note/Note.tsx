// import react, react-markdown-editor-lite, and a markdown parser you like
import React, { useState, useContext, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

import NoteContext from '../../context/NoteContext';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt({ breaks: true });

interface Type {
    html: string;
    text: string;
}

const Note = () => {
    //context
    const { iData, vData, setvData } = useContext(NoteContext);

    //state
    const [vAlue, setvAlue] = useState('# TiTle');

    function handleEditorChange({ html, text }: Type) {
        const vNewData = JSON.parse(JSON.stringify(vData));
        const title = html.split('<h1>')[1]?.split('</h1>')[0];
        vNewData[iData].name = title;
        vNewData[iData].content = text;
        vNewData[iData].updated_date = '2021/02/07 13:45';
        setvData(vNewData);
        setvAlue(text);
    }

    useEffect(() => {
        setvAlue(vData[iData].content);
    }, [iData]);

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
