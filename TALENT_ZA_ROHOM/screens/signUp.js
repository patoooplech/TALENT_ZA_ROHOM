import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/button';

export default function SignUpScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: 'skyblue',
        alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()}>Späť</Button>
      <Button onPress={() => navigation.popTo('Home')}>
        Na Home
      </Button>
      <Button onPress={() => navigation.popToTop()}>
        Na začiatok
      </Button>
    </View>
  );
}
