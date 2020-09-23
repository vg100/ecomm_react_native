import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import firebase from 'firebase';
import {firebaseConfig} from '../Fire';
import {AppStack, AuthStack} from './routes';
import SplashScreen from '../Screens/SplashScreen';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const Navigator = () => {
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState(true);
  React.useEffect(() => {
    let timer=setTimeout(() => {
      setLoading(false);
    },3000)
   return () => {
     clearTimeout(timer)
   }
  }, []);

  

  return (
    <NavigationContainer>
   {/* /   {user ? <AppStack /> : <AuthStack />} */}
      {loading && <SplashScreen />}
      {!loading && <AppStack />}
    </NavigationContainer>
  );
};
