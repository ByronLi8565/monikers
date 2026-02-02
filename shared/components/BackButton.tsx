import { Pressable, Text, StyleSheet } from "react-native";
import { colors } from "../styles";

type BackButtonProps = {
  onPress: () => void;
};

export function BackButton({ onPress }: BackButtonProps) {
  return (
    <Pressable style={styles.backButton} onPress={onPress}>
      <Text style={styles.backArrow}>←</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 24,
    left: 24,
    width: 48,
    height: 48,
    borderWidth: 3,
    borderColor: colors.border,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    zIndex: 10,
  },
  backArrow: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
