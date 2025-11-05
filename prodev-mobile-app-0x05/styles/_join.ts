import { StyleSheet } from "react-native";

const joinStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF'
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 22
  },
  titleGroup: {
    marginTop: 20
  },
  title: {
    fontWeight: '700',
    fontSize: 39,
    color: '#000000'
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 12,
    color: '#7E7B7B'
  },
  formContainer: {
    marginTop: 44,
    gap: 10
  },
  label: {
    fontSize: 18,
    fontWeight: '400',
    color: '#7B7B7B',
    marginBottom: 7
  },
  input: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: '#E9E9E9',
    paddingHorizontal: 10,
    fontSize: 16
  },
  passwordContainer: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: '#E9E9E9',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  passwordInput: {
    flex: 1,
    fontSize: 16
  },
  primaryBtn: {
    backgroundColor: '#34967C',
    height: 53,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  },
  primaryBtnText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '300'
  },
  socialContainer: {
    gap: 15,
    marginTop: 15,
  },
  socialBtn: {
    height: 53,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    borderWidth: 1,
    borderColor: '#E9E9E9'
  },
  socialBtnText: {
    fontSize: 18,
    fontWeight: '400'
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    left: 77, 
    right: 76,
    bottom: 33
  },
  bottomText: {
    fontSize: 18,
    fontWeight: '400'
  },
  bottomLink: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFA800'
  }
});

export default joinStyles;
