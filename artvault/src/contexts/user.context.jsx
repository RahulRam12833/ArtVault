import { createContext, useEffect,useReducer} from "react";

import { onAuthStateChangedListener,createUserDocumentFromAuth } from "../utilities/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
}
const userReducer = (state, action) => {
    
    const { type, payload } = action;
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
        return {
            ...state,
            currentUser: payload,
        };
        default:
        throw new Error(`Unhandled type: ${type} in userReducer`);
    }
}

export const UserProvider = ({ children }) => {
    //const [currentUser, setCurrentUser] = useState(null);
    const [{currentUser}, dispatch] = useReducer(userReducer, { currentUser: null });
    
    const setCurrentUser = (user) => {
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
    } 
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe=onAuthStateChangedListener((user)=>{
            if(user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
            // console.log(user);
        })
        return unsubscribe;
    },[])
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}