import { StyleSheet, View } from 'react-native';

import Teste1 from './components/Teste1';

export default function Ex001() {
  return (
    <View style={styles.container}>
      <Teste1 />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  /*paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },*/
});
