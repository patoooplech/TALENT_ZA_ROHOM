import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import TextInputField from '../components/textInput';
import { colors, styles } from '../utils/colors';

export default function SignUp({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');

  return (
    <View style={styles.authScreen}>
      <ScrollView
        contentContainerStyle={styles.authContent}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.authTitle}>Vytvoriť účet</Text>
        <Text style={styles.authSubtitle}>Nájdi svojich ľudí.</Text>

        <View style={styles.signUpForm}>
          <TextInputField
            label="Meno"
            placeholder="Ako sa voláš?"
            placeholderTextColor={colors.placeholder}
            autoCapitalize="words"
            autoComplete="name"
            textContentType="name"
            value={name}
            onChangeText={setName}
          />
          <TextInputField
            label="Email"
            placeholder="meno@email.sk"
            placeholderTextColor={colors.placeholder}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            textContentType="emailAddress"
            value={email}
            onChangeText={setEmail}
          />
          <TextInputField
            label="Heslo"
            placeholder="Minimálne 8 znakov"
            placeholderTextColor={colors.placeholder}
            secureTextEntry
            autoCapitalize="none"
            autoComplete="new-password"
            textContentType="newPassword"
            value={password}
            onChangeText={setPassword}
          />
          <TextInputField
            label="Adresa"
            placeholder="Mesto alebo obec"
            placeholderTextColor={colors.placeholder}
            autoComplete="address-level2"
            textContentType="addressCityAndState"
            value={address}
            onChangeText={setAddress}
          />

          <Pressable
            accessibilityRole="button"
            onPress={() => onSubmit?.({ name, email, password, address })}
            style={({ pressed }) => [
              styles.authSubmitButton,
              pressed && styles.authSubmitButtonPressed,
            ]}
          >
            <Text style={styles.authSubmitLabel}>Vytvoriť účet</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
