import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";

let reducers = combineReducers({
        profileReducer,
        dialogsReducer
    })

let store = createStore(reducers);

export default store;