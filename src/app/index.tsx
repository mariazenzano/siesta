import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ControlButtons from "../components/ControlButtons";
import Header from "../components/Header";
import TimerRing from "../components/TimerRing";
import { colors } from "../constants/colors";

export default function Index() {
  const [isRunning, setIsRunning] = useState(false);
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Header />
        <TimerRing progress={0.2} timeText="05:00" />
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
