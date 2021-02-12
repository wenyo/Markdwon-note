import React, { createContext } from 'react';

const CategoryContext = createContext({
    chooseItem: (sType: string, idx: number) => {},
    vCollection: [] as string[],
});

export const { Provider, Consumer } = CategoryContext;
export default CategoryContext;
