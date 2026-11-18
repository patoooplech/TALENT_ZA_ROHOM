import { useNavigation } from '@react-navigation/native';
import { Pressable, Text } from 'react-native';

export default function Button({ children, onPress, screen, style, textStyle }) {
  const navigation = useNavigation();
  const handlePress =
    onPress ?? (screen ? () => navigation.navigate(screen) : undefined);

  return (
    <Pressable
      accessibilityRole="button"
      onPress={handlePress}
      style={[
        {
          alignItems: 'center',
          backgroundColor: '#0875C1',
          borderRadius: 24,
          justifyContent: 'center',
          minHeight: 44,
          paddingHorizontal: 20,
        },
        style,
      ]}
    >
      <Text style={[{ color: '#FFFFFF', fontWeight: '700' }, textStyle]}>
        {children}
      </Text>
    </Pressable>
  );
}
