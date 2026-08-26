import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Home() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Bem vindo a tela principal!</Text>


      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Ex001")
        }
      >
        <Text style={styles.text}>Ex001</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Ex002")}
      >
        <Text style={styles.text}>Ex002</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("HorizontalModalTest")}
      >
        <Text style={styles.text}>HModalTest</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("VerticalModalTest")}
      >
        <Text style={styles.text}>VModalTest</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    gap: 15,
  },
  button: {
    backgroundColor: "#2FC183",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  }
});
