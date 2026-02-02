import { StyleSheet } from "react-native";

export const colors = {
  background: "#fff",
  text: "#000",
  border: "#000",
};

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
  },
  centeredContainer: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 32,
  },
  card: {
    backgroundColor: colors.background,
    borderWidth: 3,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 16,
  },
});
