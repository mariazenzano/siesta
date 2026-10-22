import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ControlButtons from "../components/ControlButtons";
import Header from "../components/Header";
import { SECONDS_PER_MINUTE } from "../constants/timer";
import { formatTime } from "../utils/formatTime";

import TimerRing from "../components/TimerRing";
import { colors } from "../constants/colors";

export default function Index() {
  const [isRunning, setIsRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(5 * SECONDS_PER_MINUTE);

  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(id);
  }, [isRunning]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Header />
        <TimerRing progress={1} timeText={formatTime(secondsLeft)} />
        <ControlButtons
          isRunning={isRunning}
          onStart={() => setIsRunning(true)}
          onPause={() => setIsRunning(false)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1, padding: 20, gap: 20 },
});
