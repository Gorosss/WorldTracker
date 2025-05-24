import { createContext, useContext, useReducer } from "react";
import SignUserController from "../controllers/signUserController";


const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}
// This is a fake user for development purposes
/* const FAKE_USER = {
  name: "Admin",
  email: "admin@admin.com",
  password: "12345",
  avatar: "https://i.pravatar.cc/100?u=ah",
};
 */
function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const signUserController = new SignUserController();

  async function login(email, password) {
    try {
      const user = await signUserController.signIn(email, password);
      dispatch({ type: "login", payload: user });
    } catch (error) {
      return ("Login failed");
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  async function signUp(name, email, password) {
    try {
      const user = await signUserController.signUp(name, email, password);
      dispatch({ type: "login", payload: user });
    } catch (error) {
      return ("Sign up failed");
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
