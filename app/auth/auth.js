import { useContext } from "react";
import jwtDecode from "jwt-decode";
import * as SecureStore from 'expo-secure-store';

import AuthContext from "./context";
import axios from "axios";

export default function useAuth() {
  const { user, setUser } = useContext(AuthContext);

  async function login(token) {
    const user = jwtDecode(token);
    axios.defaults.headers.common["JWT"] = token;
    await SecureStore.setItemAsync('token', token);
    setUser(user);
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync('token')
    setUser(null);
  };

  return { user, login, logout };
};