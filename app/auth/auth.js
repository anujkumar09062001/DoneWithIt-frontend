import { useContext } from "react";
import jwtDecode from "jwt-decode";
import * as SecureStore from 'expo-secure-store';

import AuthContext from "./context";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = async (token) => {
    const user = jwtDecode(token);
    await SecureStore.setItemAsync('token', token);
    setUser(user);
  };

  const logout = () => {
    SecureStore.deleteItemAsync('token')
    setUser(null);
  };

  return { user, login, logout };
};