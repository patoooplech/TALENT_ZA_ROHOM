import { StyleSheet } from 'react-native';

export const colors = {
  background: '#F2FAFD',
  border: '#D9E7EF',
  button: '#0875C1',
  error: '#B83D46',
  errorBorder: '#D84F57',
  inputText: '#18384A',
  label: '#23465A',
  placeholder: '#91A7B4',
  primaryText: '#163E56',
  secondaryText: '#718B9A',
  white: '#FFFFFF',
};

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputContainer: {
    marginBottom: 14,
  },
  textInputLabel: {
    color: colors.label,
    fontSize: 11,
    fontWeight: '600',
    marginBottom: 6,
  },
  textInput: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderRadius: 11,
    borderWidth: 1,
    color: colors.inputText,
    fontSize: 14,
    height: 44,
    paddingHorizontal: 12,
  },
  textInputFocused: {
    borderColor: colors.button,
  },
  textInputError: {
    borderColor: colors.errorBorder,
  },
  textInputErrorMessage: {
    color: colors.error,
    fontSize: 11,
    marginTop: 5,
  },
  authScreen: {
    backgroundColor: colors.background,
    flex: 1,
  },
  authContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 40,
    paddingHorizontal: 20,
    paddingTop: 32,
  },
  authTitle: {
    color: colors.primaryText,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  authSubtitle: {
    color: colors.secondaryText,
    fontSize: 13,
    marginTop: 6,
    textAlign: 'center',
  },
  signInForm: {
    marginTop: 30,
  },
  signUpForm: {
    marginTop: 26,
  },
  authSubmitButton: {
    alignItems: 'center',
    backgroundColor: colors.button,
    borderRadius: 24,
    elevation: 3,
    justifyContent: 'center',
    minHeight: 46,
    marginTop: 4,
    shadowColor: colors.button,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
  },
  authSubmitButtonPressed: {
    opacity: 0.85,
  },
  authSubmitLabel: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
});