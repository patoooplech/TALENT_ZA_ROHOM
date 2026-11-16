import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from '../utils/colors';

export default function TextInputField({
  label,
  error,
  style,
  inputStyle,
  accessibilityLabel,
  onFocus,
  onBlur,
  ...inputProps
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.textInputContainer, style]}>
      <Text style={styles.textInputLabel}>{label}</Text>
      <TextInput
        {...inputProps}
        accessibilityLabel={accessibilityLabel ?? label}
        onFocus={(event) => {
          setIsFocused(true);
          onFocus?.(event);
        }}
        onBlur={(event) => {
          setIsFocused(false);
          onBlur?.(event);
        }}
        style={[
          styles.textInput,
          isFocused && styles.textInputFocused,
          error && styles.textInputError,
          inputStyle,
        ]}
      />
      {error ? <Text style={styles.textInputErrorMessage}>{error}</Text> : null}
    </View>
  );
}
