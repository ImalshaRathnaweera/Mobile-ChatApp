import React, {UseReducer,useReducer} from 'react';
import {Loader} from '../reducers/reducers';

export const Store = React.createContext();

const dispactch = {};

export function StoreProvider(props){
    const[mapLoaderState,dispatchLoaderAction]= useReducer(Loader,dispactch);

    const loaderValue = {mapLoaderState,dispatchLoaderAction};

    const value ={
        ...loaderValue
    };

return <Store.Provider value={value}>{props.children}</Store.Provider>
}

