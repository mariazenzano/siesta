import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";

export default function Header() {
  return (
    <View style={styles.header}>
      <Ionicons name="chevron-back" size={24} color={colors.textMuted} />
      <Text style={styles.title}>Siesta</Text>
      <View style={styles.spacer} />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 22, fontWeight: "bold", color: colors.text },
  spacer: { width: 24 },
});
