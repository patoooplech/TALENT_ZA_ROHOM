import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import TextInputField from '../components/textInput';
import { colors, styles } from '../utils/colors';

export default function SignIn({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.authScreen}>
      <ScrollView
        contentContainerStyle={styles.authContent}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.authTitle}>Vitaj späť</Text>
        <Text style={styles.authSubtitle}>Prihlás sa do svojho účtu</Text>

        <View style={styles.signInForm}>
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
            placeholder="Zadaj heslo"
            placeholderTextColor={colors.placeholder}
            secureTextEntry
            autoCapitalize="none"
            autoComplete="password"
            textContentType="password"
            value={password}
            onChangeText={setPassword}
          />

          <Pressable
            accessibilityRole="button"
            onPress={() => onSubmit?.({ email, password })}
            style={({ pressed }) => [
              styles.authSubmitButton,
              pressed && styles.authSubmitButtonPressed,
            ]}
          >
            <Text style={styles.authSubmitLabel}>Prihlásiť sa</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
