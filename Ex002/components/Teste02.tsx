import { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, Alert } from "react-native";

function Teste2() {
  const teste = [
    require("../assets/logo_android.png"),
    require("../assets/snack-icon.png"),
    require("../assets/logo_whatsapp.png"),
  ];

  const [updateFile, setUpdateFile] = useState(
    require("../assets/snack-icon.png"),
  );

  function handleImageUpdate(relativeFile: any) {
    if (!relativeFile)
      return Alert.alert("O campo de envio não pode ser vazio");

    setUpdateFile(relativeFile);
  }

  return (
    <View>
      <Text style={{ textAlign: "center" }}>Images</Text>

      <Image source={updateFile} style={styles.image} />

      <View style={styles.pressableContainer}>
        {teste.map((index) => {
          return (
            <Pressable
              key={index}
              style={[
                styles.pressable,
                updateFile === index && styles.selectedPressable,
              ]}
              onPress={() => handleImageUpdate(index)}
            >
              <Image style={styles.pressableImage} source={index} />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default Teste2;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    marginTop: 20,
    marginBottom: 20,
  },
  pressableContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  pressable: {
    borderRadius: 10,
    borderWidth: 1,

    width: 50,
    height: 50,
  },
  pressableImage: {
    borderRadius: 10,
    width: 50,
    height: 50,
  },
  selectedPressable: {
    borderWidth: 4,
    borderColor: "gray",
  },
});
