import axios from 'axios';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthContext from './app/auth/context';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';

axios.defaults.baseURL = 'http://localhost:9000/api';

export default function App() {
  const [user, setUser] = useState('');
  console.log(user);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  )
};
