import { View, Text, StyleSheet, Pressable } from "react-native";
import { Button } from "@/shared/components/Button";
import { commonStyles } from "@/shared/styles";

type HomeScreenProps = {
  onHostGame: () => void;
  onJoinGame: () => void;
  onSettings: () => void;
};

export function HomeScreen({
  onHostGame,
  onJoinGame,
  onSettings,
}: HomeScreenProps) {
  return (
    <View style={commonStyles.centeredContainer}>
      <Text style={commonStyles.title}>Monikers</Text>

      <View style={styles.buttonContainer}>
        <Button title="Host Game" onPress={onHostGame} />
        <Button title="Join Game" onPress={onJoinGame} />
      </View>

      <Pressable style={styles.settingsButton} onPress={onSettings}>
        <Text style={styles.settingsIcon}>⚙</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    gap: 16,
    width: "100%",
    maxWidth: 300,
  },
  settingsButton: {
    position: "absolute",
    bottom: 24,
    right: 24,
    width: 50,
    height: 50,
    borderWidth: 3,
    borderColor: "#000",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  settingsIcon: {
    fontSize: 24,
  },
});
