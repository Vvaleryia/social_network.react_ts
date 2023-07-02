import {rootStoreType} from "./redux/state";
import * as React from 'react';


const StoreContext = React.createContext({} as rootStoreType)

export type ProviderType = {
    store: rootStoreType,
    children: any
}

export const Provider = (props: ProviderType) => {
    return(
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContext;