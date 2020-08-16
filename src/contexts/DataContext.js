import React, { createContext, useReducer, useContext } from 'react'

const DataContext = createContext();

function DataContextProvider({ initialState, reducer, children}) {
    return (
        // value = {{state, dispatch}}
        <DataContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;

export const useDataValue = () => useContext(DataContext);
