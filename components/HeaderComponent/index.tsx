import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function HeaderComponent({ routeName }: { routeName: string }) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {routeName != "HomeStack" && (
        <Pressable
          style={{ flexDirection: "row", alignItems: "center", gap: 14 }}
          onPress={() => routeName != "HomeStack" && navigation.goBack()}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </Pressable>
      )}
      <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", marginLeft: 12 }}>{routeName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 65,
    backgroundColor: "#000000",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#808080",
  },
});
