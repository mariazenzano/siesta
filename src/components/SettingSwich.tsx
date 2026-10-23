import { StyleSheet, Switch, Text, View } from "react-native";
import { colors } from "../constants/colors";
type Props = {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
};
export default function SettingSwitch({ label, value, onChange }: Props) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onChange}
        trackColor={{ false: colors.track, true: colors.accent }}
        thumbColor={colors.card}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: { fontSize: 10, fontWeight: "bold", color: colors.text },
});
