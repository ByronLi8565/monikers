import { Pressable, StyleSheet } from "react-native";
import { colors } from "../styles";

type IconButtonProps = {
  icon: React.ReactNode;
  onPress: () => void;
  size?: number;
};

export function IconButton({ icon, onPress, size = 40 }: IconButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { width: size, height: size },
        pressed && styles.buttonPressed,
      ]}
      onPress={onPress}
    >
      {icon}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  buttonPressed: {
    opacity: 0.7,
  },
});
