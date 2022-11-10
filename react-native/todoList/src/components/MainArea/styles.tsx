import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#242321',
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    padding: 12,
    marginTop: -40,

  },
  input: {
    flex: 1,
    backgroundColor: '#242321',
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 4,
    height: 48,
    paddingLeft: 12,
    fontSize: 20
  },
  addBtn: {
    backgroundColor: '#1E6F9F',
    marginLeft: 12,
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  btnText: {
    fontSize: 28
  },

  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  headerContent: {
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 20,
    marginRight: 12,
    fontWeight: 'bold',
    color: '#1E6F9F'
  },
  headerCount: {
    backgroundColor: '#333333',
    textAlign: 'center',
    borderRadius: 8
  }
});