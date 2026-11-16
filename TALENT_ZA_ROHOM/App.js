import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import HomeScreen from './screens/homeScreen'; //import { NavigationContainer } from '@react-navigation/native';
import { styles } from './utils/colors';
import SignIn from './screens/signIn';
import SignUp from './screens/signUp';


export default function App() {
  return (
    <View style={styles.appContainer}>
      <SignIn />
      <SignUp />
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}
