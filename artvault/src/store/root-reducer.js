import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    // Add other reducers here as needed
})