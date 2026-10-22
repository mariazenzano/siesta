import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
type Props = {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
};
export default function ControlButtons({ isRunning, onStart, onPause }: Props) {
  return (
    <View style={styles.row}>
      <Pressable
        style={[styles.card, isRunning && styles.cardActive]}
        onPress={onStart}
      >
        <View style={styles.icon}>
          <Ionicons name="play" size={20} color={colors.primary} />
        </View>
        <Text style={[styles.label, isRunning && styles.labelActive]}>
          Empezar
        </Text>
      </Pressable>
      <Pressable style={styles.card} onPress={onPause}>
        <View style={styles.icon}>
          <Ionicons name="pause" size={20} color={colors.primary} />
        </View>
        <Text style={styles.label}>Pausar</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 12 },
  card: {
    flex: 1,
    alignItems: "center",
    gap: 8,
    backgroundColor: colors.card,
    borderRadius: 20,
    paddingVertical: 16,
  },
  cardActive: { backgroundColor: colors.primary },
  icon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primarySoft,
    justifyContent: "center",
    alignItems: "center",
  },
  label: { fontSize: 16, fontWeight: "bold", color: colors.text },
  labelActive: { color: colors.onPrimary },
});
