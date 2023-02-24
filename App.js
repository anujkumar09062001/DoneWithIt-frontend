import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

import AuthContext from './app/auth/context';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import storage from './app/auth/storage';

// axios.defaults.baseURL = 'http://192.168.125.195:9000/api';
axios.defaults.baseURL = 'https://donewithit-backend-51h5.onrender.com/api';

export default function App() {
  const [user, setUser] = useState('');
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await storage.getUser();
    setUser(user);
  }

  const appReady = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();
      await restoreUser();
    } catch (error) {
      console.log('Error loading app', error);
    }
    setIsReady(true);
  }

  useEffect(() => {
    appReady();
  }, [])

  const onNavigationContainerReady = async () => {
    if (isReady) await SplashScreen.hideAsync();
  };

  if (!isReady) return null;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme} onReady={onNavigationContainerReady}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  )
};
