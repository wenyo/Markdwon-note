import React, { createContext } from 'react';
import { vList } from './NoteContext';

const CategoryContext = createContext({
    vCollection: [] as vList[],
});

export const { Provider, Consumer } = CategoryContext;
export default CategoryContext;
