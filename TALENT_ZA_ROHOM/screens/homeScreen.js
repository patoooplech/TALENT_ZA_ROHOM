import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../utils/colors';
import Button from '../components/button';

export default function HomeScreen() {
  return (
    <View style={styles.appContainer}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
       <Button screen="SignIn">Prihlásiť sa</Button>
    </View>
  );
}
