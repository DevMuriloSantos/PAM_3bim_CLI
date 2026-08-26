import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";

function ModalTest() {
  const [showModal, setShowModal] = useState(false);
  const [informations, setInformations] = useState({
    id: "",
    carName: "",
    carImg: require("../assets/porsche911.png"),
    carModel: "",
  });
  const informationsGame = [
    {
      id: 1,
      name: "Porshe 911",
      img: require("../assets/porsche911.png"),
      modelo: "2025",
    },
    {
      id: 2,
      name: "Porshe 718",
      img: require("../assets/porsche718.png"),
      modelo: "2025",
    },
    {
      id: 3,
      name: "Porshe 918",
      img: require("../assets/porsche918.png"),
      modelo: "2025",
    },
    {
      id: 4,
      name: "Ferrari",
      img: require("../assets/ferrari458.png"),
      modelo: "2015",
    },
  ];

  function handleShowCar(
    id: number,
    carName: string,
    img: React.ReactNode,
    model: string,
  ) {
    setShowModal(true);
    setInformations({
      id: id.toString(),
      carName: carName,
      carImg: img,
      carModel: model,
    });
    return;
  }

  return (
      <View style={{ marginTop: 65, display: "flex", alignItems: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Modelos de Porsche
        </Text>

        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
        >
          <View style={styles.container}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={styles.btnClose}
                onPress={() => setShowModal(false)}
              >
                <Image
                  style={styles.imgClose}
                  source={require("../assets/botao-fechar.png")}
                />
              </TouchableOpacity>

              <Image style={styles.img} source={informations.carImg} />

              <View style={styles.modelText}>
                <Text>Id do veículo: {informations.id}</Text>
                <Text>Nome do veículo: {informations.carName}</Text>
                <Text>Modelo: {informations.carModel}</Text>
              </View>
            </View>
          </View>
        </Modal>

        <FlatList
        numColumns={2}
          data={informationsGame}
          renderItem={({ item }: any) => (
            <View style={{ margin: 20 }}>
              <TouchableOpacity
                onPress={() =>
                  handleShowCar(item.id, item.name, item.img, item.modelo)
                }
                // style={styles.onPress}
              >
                <View>
                  <Image style={styles.img} source={item.img} />
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  modalView: {
    backfaceVisibility: "hidden",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btnClose: {
    display: "flex",
    marginLeft: "auto",
    marginBottom: 20,
  },
  imgClose: {
    width: 20,
    height: 20,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  modelText: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
});

export default ModalTest;
