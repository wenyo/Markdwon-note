import React from 'react';

export interface DataType {
    [x: number]: {
        name: string;
        collection: number; // use id , not name
        starred: boolean;
        trash: boolean;
        updated_date: string;
        created_date: string;
        content: string;
    };
}

export const vCategory = ['Home', 'Work', 'Project'];

export const vData: DataType = {
    0: {
        name: 'Heading: The biggest title',
        collection: 2,
        starred: true,
        trash: false,
        updated_date: '2021/02/05 13:45',
        created_date: '2021/02/04 11:00',
        content:
            `# Heading: The biggest title 
This is the body text area. The font size of the paragraph should be 16 px, and the line height is 24 px.
## Subtitle
* First bullet list 
* second bullet list 
* italic bullet list
### Minor Title
1. First number list 
1. second number list 
1. bold number list
### Minor Title
---
> Quote: to repeat the words that someone else has said or written. Translated from Cambridge University Press
## Subtitle
[Markdown-Note](https://wenyo.github.io/Markdwon-note/)
You can insert a link into a word in the paragraph, and it would be colored in blue. Or just paste the website link to the note.
![forest](https://ppt.cc/fTFpex@.jpg)
Compare the difference between ` +
            '`' +
            `{code text} ` +
            '`' +
            ` and:\n` +
            '`{ “type”: code area }\n`',
    },
    1: {
        name: 'Note with star',
        collection: 2,
        starred: true,
        trash: false,
        updated_date: '2021/02/07 13:45',
        created_date: '2021/02/01 11:00',
        content: `# Note with star 
## string`,
    },
};
