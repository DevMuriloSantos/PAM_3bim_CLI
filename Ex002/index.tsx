import { StyleSheet, Text, View } from 'react-native';
import Teste2 from "./components/Teste02"


export default function Ex002() {
  return (
    <View style={styles.container}>
      <Teste2 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center"
  }
})