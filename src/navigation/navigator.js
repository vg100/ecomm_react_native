import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import firebase from 'firebase';
import {firebaseConfig} from '../Fire';
import {AppStack, AuthStack} from './routes';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const Navigator = () => {
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState(true);
  // React.useEffect(() => {
  //   _checkIfLoggedIn();
  // }, []);

  // function _checkIfLoggedIn() {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       console.log('users', user);
  //       setUser(true);
  //     } else {
  //       console.log('not sign in');
  //       setUser(false);
  //     }
  //   });
  // }

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
