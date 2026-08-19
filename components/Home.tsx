import { useState } from "react";
import { Image, View, TextInput, Text, Button } from "react-native";

export default function Home() {
  const [nome, setNome] = useState("");
  const [ImageSource, setImageSource] = useState({});

  function trocarImagem() {
    if (nome.trim().toLocaleLowerCase() == "teste") {
      setImageSource(require("../img/peak.jpg"));
    }
    if (nome == null || nome == "") {
      setImageSource(require("../img/sem-imagem.jpg"));
    }
  }

  return (
    <View>
      <Text>Nome</Text>
      <TextInput
        style={{
          borderColor: "black",
          height: 40,
          width: 200,
          borderWidth: 1,
          borderRadius: 10,
          padding: 5,
          marginBottom: 10,
        }}
        placeholder=" Digite Nome"
        value={nome}
        onChangeText={(text: any) => {
          setNome(text);
        }}
      />
      <Button title="Testar" onPress={trocarImagem} />
      <Image source={ImageSource} style={{ width: 200, height: 200, margin: 10 }} />
      
      {nome.trim() != "" && <Text>Olá {nome} </Text>}
    </View>
  );
}
