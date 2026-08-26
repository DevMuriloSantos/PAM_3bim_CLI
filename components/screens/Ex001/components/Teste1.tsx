import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  FlatList,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";

function Teste1() {
  const [imageName, setImageName] = useState("");
  const [image, setImage] = useState<any>(null);
  const [imageDescription, setImageDescription] = useState("");

  const associativeNames: Record<string, string> = {
    Instagam: "Logo do instagram",
    Android: "Logo do android",
    Whatsapp: "Logo do whatsapp",
  };

  function handleImageName(name: string) {
    const images: Record<string, any> = {
      Instagram: require("../assets/logo_insta.png"),
      Android: require("../assets/logo_android.png"),
      Whatsapp: require("../assets/logo_whatsapp.png"),
    };

    if (name.trim() == "") {
      Alert.alert("O nome não pode ser vazio");
      return;
    }

    const selectedImage = images[name];

    if (!selectedImage) {
      Alert.alert("Imagem não encontrada");
      return;
    }

    setImage(selectedImage);
    setImageDescription(name);
  }

  return (
    <View>
      <Text>Imagens</Text>

      <FlatList
        data={Object.keys(associativeNames)}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Text style={{ margin: 5 }}>
            • {item} - {associativeNames[item]}
          </Text>
        )}
      />

      <TextInput
        style={styles.input}
        value={imageName}
        placeholder="Digite um nome"
        onChangeText={(text) => setImageName(text)}
      />

      <Pressable
        style={styles.pressable}
        onPress={() => handleImageName(imageName.trim())}
      >
        <Text style={{ color: "white" }}>Enviar</Text>
      </Pressable>

      <View style={styles.container}>
        <Text>{imageDescription}</Text>
        {image && <Image style={{ width: 100, height: 100 }} source={image} />}
      </View>
    </View>
  );
}

export default Teste1;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 6,
  },
  pressable: {
    backgroundColor: "lightblue",
    borderRadius: 3,
    marginTop: 10,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
