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
        name: 'Untitle note',
        collection: 1,
        starred: false,
        trash: true,
        updated_date: '2021/02/07 13:45',
        created_date: '2021/02/01 11:00',
        content: `# Untitle note 
## string`,
    },
    1: {
        name: 'Note with star',
        collection: 1,
        starred: true,
        trash: false,
        updated_date: '2021/02/07 13:45',
        created_date: '2021/02/01 11:00',
        content: `# Note with star 
## string`,
    },
    2: {
        name: 'Heading: The biggest title',
        collection: 1,
        starred: true,
        trash: false,
        updated_date: '2021/02/05 13:45',
        created_date: '2021/02/04 11:00',
        content: `# Heading: The biggest title 
## string`,
    },
    3: {
        name: 'Untitle note',
        collection: 2,
        starred: false,
        trash: true,
        updated_date: '2021/02/03 13:45',
        created_date: '2021/02/03 11:00',
        content: `# Untitle note 
## string`,
    },
    4: {
        name: 'Untitle note',
        collection: 0,
        starred: false,
        trash: false,
        updated_date: '2021/02/07 13:45',
        created_date: '2021/02/01 11:00',
        content: `# Untitle note 
## string`,
    },
    5: {
        name: 'Untitle note5',
        collection: 2,
        starred: false,
        trash: false,
        updated_date: '2021/02/07 13:45',
        created_date: '2021/02/01 11:00',
        content: `# Untitle note 
## string`,
    },
};
