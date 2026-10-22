import Slider from "@react-native-community/slider";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
type Props = {
  minutes: number;
  onChange: (minutes: number) => void;
};

export default function DurationSlider({ minutes, onChange }: Props) {
  return (
    <View style={styles.block}>
      <View style={styles.row}>
        <Text style={styles.label}>Duración</Text>
        <Text style={styles.value}>{minutes} min</Text>
      </View>
      <Slider
        minimumValue={1}
        maximumValue={30}
        step={1}
        value={minutes}
        onValueChange={onChange}
        minimumTrackTintColor={colors.accent}
        maximumTrackTintColor={colors.track}
        thumbTintColor={colors.accent}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  block: { gap: 4 },
  row: { flexDirection: "row", justifyContent: "space-between" },
  label: { fontSize: 16, fontWeight: "bold", color: colors.text },
  value: { fontSize: 14, color: colors.textMuted },
});
