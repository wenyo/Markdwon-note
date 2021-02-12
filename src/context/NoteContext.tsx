import React, { createContext } from 'react';
import { DataType } from '../json/Data';

const NoteContext = createContext({
    vData: {} as DataType,
    setvData: (x: DataType) => {},
    iData: -1,
    setiData: (x: number) => {},
});

export const { Provider, Consumer } = NoteContext;
export default NoteContext;
