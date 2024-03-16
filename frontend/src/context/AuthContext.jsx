import { useEffect, useReducer,createContext } from "react";

const initialState={
    user: localStorage.getItem('user')!==undefined ? JSON.parse(localStorage.getItem('user')):null,
    role: localStorage.getItem('role') || null,
    token: localStorage.getItem('token') || null,
};

export const authContext = createContext(initialState);

const authReducer = (state, action)=>{
    switch(action.type){
        case "LOGIN_START":
            return{
                user: null,
                role: null,
                token: null,
            };

        case "LOGIN_SUCCESS":
           // Exclude the 'photo' property from the user object
      const { photo, ...userData } = action.payload.user;
      return {
        user: userData,
        role: action.payload.role,
        token: action.payload.token,
      };

        case "LOGOUT":
            return{
                user: null,
                role: null,
                token: null,
            };

        default:
            return state;
    }
};

export const AuthContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(state.user))
        
        localStorage.setItem('role', state.role)
        localStorage.setItem('token', state.token)
    },[state]);

    return (<authContext.Provider value={{user:state.user, token:state.token, role:state.role, dispatch}}>
        {children}
    </authContext.Provider>
    );
};