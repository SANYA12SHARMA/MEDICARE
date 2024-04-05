import { useEffect, useReducer, createContext } from "react";

// Initial state retrieved from localStorage or set to null
const initialState = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  role: localStorage.getItem('role') || null,
  token: localStorage.getItem('token') || null,
};

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        role: null,
        token: null,
      };

    case "LOGIN_SUCCESS":
      const { photo, ...userData } = action.payload.user; // Exclude the 'photo' property from the user object
      return {
        user: userData,
        role: action.payload.role,
        token: action.payload.token,
      };

    case "LOGOUT":
      return {
        user: null,
        role: null,
        token: null,
      };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Store user, role, and token in localStorage when they change
    localStorage.setItem('user', JSON.stringify(state.user));
    localStorage.setItem('role', state.role);
    localStorage.setItem('token', state.token);
  }, [state]);

  return (
    <authContext.Provider value={{ ...state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};
