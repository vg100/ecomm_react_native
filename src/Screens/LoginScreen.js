import React from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Button,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';



import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';

const LoginScreen = (props) => {
  // const [user, setuser] = React.useState({});
  // const [isloaded, setisloaded] = React.useState(false);
  // const [message, setMessage] = React.useState('');
  // const [codeInput, setcodeInput] = React.useState('');
  // const [phoneNumber, setphoneNumber] = React.useState('+91');
  // const [confirmResult, setconfirmResult] = React.useState(null);
  const [userInfo, setuserInfo] = React.useState(null);
  const [gettingLoginStatus, setgettingLoginStatus] = React.useState(true);

  React.useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],

      webClientId:
        '891012647798-8lk0e11s0mo0se4mtsfar3sv0jf9ngun.apps.googleusercontent.com',
    });

    _isSignedIn();
  }, []);

  _isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      alert('User is already signed in');
      //Get the User details as user is already signed in
      _getCurrentUserInfo();
    } else {
      //alert("Please Login");
      console.log('Please Login');
    }
    setgettingLoginStatus(false);
  };

  _getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      console.log('User Info --> ', userInfo);
      props.getuser(userInfo)
      setuserInfo(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        alert('User has not signed in yet');
        console.log('User has not signed in yet');
      } else {
        alert("Something went wrong. Unable to get user's info");
        console.log("Something went wrong. Unable to get user's info");
      }
    }
  };

  _signIn = async () => {
    //Prompts a modal to let the user sign in into your application.
    try {
      await GoogleSignin.hasPlayServices({
        //Check if device has Google Play Services installed.
        //Always resolves to true on iOS.
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info --> ', userInfo);
      setuserInfo(userInfo);
    } catch (error) {
      console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated');
      } else {
        console.log('Some Other Error Happened');
      }
    }
  };

  _signOut = async () => {
    //Remove user session from the device.
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setuserInfo(null); // Remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{marginLeft:18,marginTop:-8,}}>
      <GoogleSigninButton
        style={{width: 290, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={_signIn}
      />
      {/* {userInfo != null && (
        <View style={styles.container}>
          <Image
            source={{uri: userInfo.user.photo}}
            style={styles.imageStyle}
          />
          <Text style={styles.text}>Name: {userInfo.user.name} </Text>
          <Text style={styles.text}>Email: {userInfo.user.email}</Text>
          <TouchableOpacity style={styles.button} onPress={_signOut}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 10,
  },
});

export default LoginScreen;
