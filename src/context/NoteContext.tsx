import React, { createContext } from 'react';
import { DataType } from '../json/Data';

export interface vList {
    name: string;
    id: number;
}

export enum sActiveType {
    STARRED,
    COLLECTIONS,
    TRASH,
    NONE,
}

export const vDefault: vList[] = [
    { name: 'Home', id: 0 },
    { name: 'Work', id: 1 },
    { name: 'Project', id: 2 },
];

const NoteContext = createContext({
    vData: {} as DataType,
    setvData: (x: DataType) => {},
    iData: -1,
    setiData: (x: number) => {},
    iActive: -1,
    sType: sActiveType[0],
    chooseItem: (sType: string, idx: number) => {},
});

export const { Provider, Consumer } = NoteContext;
export default NoteContext;
