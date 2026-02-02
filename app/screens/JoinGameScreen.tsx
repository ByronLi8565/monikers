import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button } from "@/shared/components/Button";
import { BackButton } from "@/shared/components/BackButton";
import { commonStyles, colors } from "@/shared/styles";

type JoinGameScreenProps = {
  roomCode: string;
  onRoomCodeChange: (code: string) => void;
  onJoin: () => void;
  onBack: () => void;
};

export function JoinGameScreen({
  roomCode,
  onRoomCodeChange,
  onJoin,
  onBack,
}: JoinGameScreenProps) {
  return (
    <View style={commonStyles.centeredContainer}>
      <BackButton onPress={onBack} />
      <View style={styles.inputCard}>
        <Text style={styles.label}>Enter Room Code</Text>
        <TextInput
          style={styles.input}
          value={roomCode}
          onChangeText={onRoomCodeChange}
          placeholder=""
          autoCapitalize="characters"
          autoCorrect={false}
        />
      </View>

      <Button title="Join" onPress={onJoin} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputCard: {
    width: "100%",
    maxWidth: 400,
    marginBottom: 32,
    ...commonStyles.card,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: colors.text,
  },
  input: {
    borderWidth: 3,
    borderColor: colors.border,
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    backgroundColor: colors.background,
  },
});
