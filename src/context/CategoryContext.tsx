import React, { createContext } from 'react';
import { DataType } from '../json/Data';

const CategoryContext = createContext({
    chooseItem: (sType: string, idx: number) => {},
    vData: {} as DataType
});

export const { Provider, Consumer } = CategoryContext;
export default CategoryContext;
