import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ControlButtons from "../components/ControlButtons";
import DurationSlider from "../components/DurationSlider";
import Header from "../components/Header";
import TimerRing from "../components/TimerRing";
import { colors } from "../constants/colors";
import { SECONDS_PER_MINUTE } from "../constants/timer";
import { formatTime } from "../utils/formatTime";

export default function Index() {
  const [isRunning, setIsRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(5 * SECONDS_PER_MINUTE);

  const [durationMinutes, setDurationMinutes] = useState(5);
  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [isRunning]);
  function handleDurationChange(minutes: number) {
    setDurationMinutes(minutes);
    setSecondsLeft(minutes * SECONDS_PER_MINUTE);
    setIsRunning(false);
  }
  const progress = secondsLeft / (durationMinutes * SECONDS_PER_MINUTE);
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Header />
        <TimerRing
          progress={progress}
          timeText={formatTime(secondsLeft)}
        />{" "}
        <ControlButtons
          isRunning={isRunning}
          onStart={() => setIsRunning(true)}
          onPause={() => setIsRunning(false)}
        />
        <View style={styles.settings}>
          <DurationSlider
            minutes={durationMinutes}
            onChange={handleDurationChange}
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
});
