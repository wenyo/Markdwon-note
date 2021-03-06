import { useState, useContext, useEffect } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import NoteContext from '../../context/NoteContext';

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
    const [sValue, setsValue] = useState('');

    function handleEditorChange({ html, text }: Type) {
        if (iData < 0) return;
        const vNewData = JSON.parse(JSON.stringify(vData));
        const title = html.split('<h1>')[1]?.split('</h1>')[0];
        vNewData[iData].name = title;
        vNewData[iData].content = text;
        vNewData[iData].updated_date = '2021/02/07 13:45';
        setvData(vNewData);
        setsValue(text);
    }

    useEffect(() => {
        if (iData < 0) {
            setsValue('## Choese Note or Create Note first');
        } else {
            setsValue(vData[iData].content);
        }
    }, [iData]);

    return (
        <MdEditor
            id="Note"
            value={sValue}
            style={{ height: '100vh', width: 'calc( 100vw - 500px )' }}
            renderHTML={(text) => mdParser.render(`${text}`)}
            onChange={(e) => handleEditorChange(e)}
        />
    );
};

export default Note;
