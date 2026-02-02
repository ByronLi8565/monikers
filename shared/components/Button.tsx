import { Pressable, Text, StyleSheet } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
};

export function Button({ title, onPress, variant = "primary" }: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        variant === "secondary" && styles.buttonSecondary,
        pressed && styles.buttonPressed,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonText,
          variant === "primary" ? styles.primaryText : styles.secondaryText,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#000",
    borderWidth: 3,
    borderColor: "#000",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 32,
    minWidth: 200,
    alignItems: "center",
  },
  buttonSecondary: {
    backgroundColor: "#fff",
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  primaryText: {
    color: "#fff",
  },
  secondaryText: {
    color: "#000",
  },
});
