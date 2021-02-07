import React, { createContext } from 'react';

const CategoryContext = createContext({
    chooseItem: (sType: string, idx: number) => {},
});

export const { Provider, Consumer } = CategoryContext;
export default CategoryContext;
