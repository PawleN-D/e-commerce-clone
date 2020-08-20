//setup data layer 
//  Wee need this to track the basket

import React, { createContext, useContext, useReducer } from 'react';

//This is the data layer
export const StateContext = createContext();

//Build a provider
export const StateProvider = ({ reducer, initialState, childeren }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {childeren}
    </StateContext.Provider>
);

//this is how we use it inside a component
export const useStateValue = () => useContext(StateContext);