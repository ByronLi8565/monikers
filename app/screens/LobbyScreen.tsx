import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Image } from "expo-image";
import { Button } from "@/shared/components/Button";
import { IconButton } from "@/shared/components/IconButton";
import { BackButton } from "@/shared/components/BackButton";
import { ConfirmationModal } from "@/shared/components/ConfirmationModal";
import { commonStyles, colors } from "@/shared/styles";

type Team = {
  id: string;
  name: string;
  players: string[];
  icon: string;
  expanded: boolean;
};

type LobbyScreenProps = {
  roomCode: string;
  teams: Team[];
  onAddTeam: () => void;
  onPlay: () => void;
  onSettings: () => void;
  onBack: () => void;
  onCopyRoomCode: () => void;
  onToggleTeam: (teamId: string) => void;
};

export function LobbyScreen({
  roomCode,
  teams,
  onAddTeam,
  onPlay,
  onSettings,
  onBack,
  onCopyRoomCode,
  onToggleTeam,
}: LobbyScreenProps) {
  const [showBackConfirm, setShowBackConfirm] = useState(false);

  const handleBackPress = () => {
    setShowBackConfirm(true);
  };

  const confirmBack = () => {
    setShowBackConfirm(false);
    onBack();
  };

  return (
    <View style={commonStyles.container}>
      <BackButton onPress={handleBackPress} />

      <ConfirmationModal
        visible={showBackConfirm}
        title="Leave Lobby?"
        message="This might disconnect you from your current game."
        onConfirm={confirmBack}
        onCancel={() => setShowBackConfirm(false)}
        confirmText="Leave"
        cancelText="Cancel"
      />

      <View style={styles.header}>
        <View style={styles.roomCodeCard}>
          <Text style={styles.roomCodeLabel}>Room Code: {roomCode}</Text>
          <IconButton
            icon={
              <Image
                source={require("../../assets/images/copy.svg")}
                style={styles.copyIcon}
              />
            }
            onPress={onCopyRoomCode}
            size={36}
          />
        </View>
      </View>

      <ScrollView style={styles.teamsContainer}>
        {teams.map((team) => (
          <View key={team.id} style={styles.teamCard}>
            <Pressable
              style={styles.teamHeader}
              onPress={() => onToggleTeam(team.id)}
            >
              <Text style={styles.teamName}>{team.name}</Text>
              <Text style={styles.teamIcon}>
                {team.expanded ? "▼" : "▶"}
              </Text>
            </Pressable>

            {team.expanded &&
              team.players.map((player, index) => (
                <View key={index} style={styles.playerRow}>
                  <View style={styles.playerIcon}>
                    <Text style={styles.playerIconText}>⚙</Text>
                  </View>
                  <Text style={styles.playerName}>{player}</Text>
                </View>
              ))}
          </View>
        ))}

        <Button title="Add Team" onPress={onAddTeam} variant="secondary" />
      </ScrollView>

      <View style={styles.footer}>
        <Button title="Play!" onPress={onPlay} />
        <Button
          title="Lobby Settings"
          onPress={onSettings}
          variant="secondary"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 24,
    marginTop: 60,
  },
  roomCodeCard: {
    ...commonStyles.card,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  roomCodeLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  copyIcon: {
    width: 18,
    height: 18,
  },
  teamsContainer: {
    flex: 1,
    marginBottom: 24,
  },
  teamCard: {
    ...commonStyles.card,
    marginBottom: 16,
  },
  teamHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: colors.border,
  },
  teamName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  teamIcon: {
    fontSize: 24,
  },
  playerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  playerIcon: {
    width: 48,
    height: 48,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  playerIconText: {
    fontSize: 16,
  },
  playerName: {
    fontSize: 16,
  },
  footer: {
    gap: 12,
  },
});
