import React from 'react';

export interface DataType {
    [x: number]: {
        name: string;
        collection: string;
        starred: boolean;
        updated_date: string;
        created_date: string;
    };
}

export const vCategory = ['Home', 'Work', 'Project'];

export const vData: DataType = {
    1: {
        name: 'Note with star',
        collection: 'Project',
        starred: true,
        updated_date: '2021/02/07 13:45',
        created_date: '2021/02/01 11:00',
    },
    2: {
        name: 'Heading: The biggest title',
        collection: 'Project',
        starred: true,
        updated_date: '2021/02/05 13:45',
        created_date: '2021/02/04 11:00',
    },
    3: {
        name: 'Untitle note',
        collection: 'Project',
        starred: true,
        updated_date: '2021/02/03 13:45',
        created_date: '2021/02/03 11:00',
    },
    4: {
        name: 'Untitle note',
        collection: 'Project',
        starred: true,
        updated_date: '2021/02/07 13:45',
        created_date: '2021/02/01 11:00',
    },
};
