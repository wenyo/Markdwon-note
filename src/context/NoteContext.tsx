import React, { createContext } from 'react';
import { DataType } from '../json/Data';

const NoteContext = createContext({
    vData: {} as DataType
});

export const { Provider, Consumer } = NoteContext;
export default NoteContext;
