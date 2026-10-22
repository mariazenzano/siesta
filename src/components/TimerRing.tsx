import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { colors } from "../constants/colors";

const SIZE = 240;
const STROKE = 20;
const RADIUS = (SIZE - STROKE) / 2;

const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

type Props = { progress: number; timeText: string };

export default function TimerRing({ timeText, progress }: Props) {
  return (
    <View style={styles.wrapper}>
      <Svg width={SIZE} height={SIZE}>
        <Circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          stroke={colors.track}
          strokeWidth={STROKE}
          fill="none"
        />
        <Circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS - STROKE}
          fill={colors.card}
        />
        <Circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          stroke={colors.primary}
          strokeWidth={STROKE}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
          rotation={-90}
          origin={`${SIZE / 2}, ${SIZE / 2}`}
        />
      </Svg>
      <View style={styles.center}>
        <Text style={styles.time}>{timeText}</Text>
        <Text style={styles.label}>restante</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: { alignItems: "center", justifyContent: "center" },
  center: { position: "absolute", alignItems: "center" },
  time: { fontSize: 48, fontWeight: "bold", color: colors.text },
  label: { fontSize: 14, color: colors.textMuted },
});
