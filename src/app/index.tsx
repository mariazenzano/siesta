import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ControlButtons from "../components/ControlButtons";
import DurationSlider from "../components/DurationSlider";
import TimerRing from "../components/TimerRing"
import Header from "../components/Header";
import SettingSwitch from "../components/SettingSwich";
import { colors } from "../constants/colors";
import { SECONDS_PER_MINUTE } from "../constants/timer";
import { formatTime } from "../utils/formatTime";
export default function Index() {
  const [isRunning, setIsRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(5 * SECONDS_PER_MINUTE);
  const [showSeconds, setShowSeconds] = useState(true);
  const [durationMinutes, setDurationMinutes] = useState(5);
  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [isRunning]);

  useEffect(() => {
    if (secondsLeft > 0) return;
    setIsRunning(false);
  }, [secondsLeft]);
  function handleDurationChange(minutes: number) {
    setDurationMinutes(minutes);
    setSecondsLeft(minutes * SECONDS_PER_MINUTE);
    setIsRunning(false);
  }
  const progress = secondsLeft / (durationMinutes * SECONDS_PER_MINUTE);
  const isDone = secondsLeft === 0;
  function handleStart() {
    if (secondsLeft === 0) setSecondsLeft(durationMinutes * SECONDS_PER_MINUTE);
    setIsRunning(true);
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Header />
        <TimerRing
          progress={progress}
          timeText={formatTime(secondsLeft, showSeconds)}
        />
        {isDone && (
          <View style={styles.done}>
            <View style={styles.doneDot} />
            <Text style={styles.doneText}>¡Listo! Hora de volver</Text>
          </View>
        )}
        <ControlButtons
          isRunning={isRunning}
          onStart={handleStart}
          onPause={() => setIsRunning(false)}
        />
        <View style={styles.settings}>
          <DurationSlider
            minutes={durationMinutes}
            onChange={handleDurationChange}
          />
          <SettingSwitch
            label="Mostrar segundos"
            value={showSeconds}
            onChange={setShowSeconds}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1, padding: 20, gap: 20 },
  settings: {
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 20,
    gap: 16,
  },

  done: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  doneDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.warning,
  },
  doneText: { fontSize: 14, color: colors.textMuted },
});
