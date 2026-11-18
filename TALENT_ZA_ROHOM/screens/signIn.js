import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import Button from '../components/button';

export default function SignInScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: 'tomato',
        alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sign In</Text>
      <Button onPress={() => navigation.navigate('SignUp')}>
        Nemám účet
      </Button>
    </View>
  );
}