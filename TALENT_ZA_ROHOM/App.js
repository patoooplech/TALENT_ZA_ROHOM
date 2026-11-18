import React from 'react';
import HomeScreen from './screens/homeScreen';
import SignIn from './screens/signIn';
import SignUp from './screens/signUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function RootStack({ isSignedIn }) {
  return (
    <Stack.Navigator>
      {isSignedIn ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  );
}

const AuthContext = React.createContext(null);

export default function App() {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  const auth = {
    signIn: () => setIsSignedIn(true),
    signOut: () => setIsSignedIn(false),
  };
  return (
    <AuthContext.Provider value={auth}>
      <NavigationContainer>
        <RootStack isSignedIn={isSignedIn} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}