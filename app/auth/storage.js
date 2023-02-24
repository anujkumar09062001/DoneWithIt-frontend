import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync('token');
  } catch (error) {
    console.log('Error getting the auth token');
  }
};

const getUser = async () => {
  const token = await getToken();
  return (token) ? jwtDecode(token) : null;
};

export default { getToken, getUser };