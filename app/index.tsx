import { useState } from "react";
import { HomeScreen } from "./screens/HomeScreen";
import { JoinGameScreen } from "./screens/JoinGameScreen";
import { LobbyScreen } from "./screens/LobbyScreen";

type Screen = "home" | "join" | "lobby";

export default function Index() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");
  const [roomCode, setRoomCode] = useState("");
  const [teams, setTeams] = useState([
    {
      id: "1",
      name: "Team 1",
      players: ["Player 1"],
      icon: "∧",
      expanded: true,
    },
    {
      id: "2",
      name: "Team 2",
      players: [],
      icon: "∨",
      expanded: false,
    },
  ]);

  const handleToggleTeam = (teamId: string) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.id === teamId ? { ...team, expanded: !team.expanded } : team
      )
    );
  };

  const handleCopyRoomCode = () => {
    // TODO: Implement clipboard copy
    console.log("Copying room code:", roomCode || "ABCDE");
  };

  if (currentScreen === "join") {
    return (
      <JoinGameScreen
        roomCode={roomCode}
        onRoomCodeChange={setRoomCode}
        onJoin={() => setCurrentScreen("lobby")}
        onBack={() => setCurrentScreen("home")}
      />
    );
  }

  if (currentScreen === "lobby") {
    return (
      <LobbyScreen
        roomCode={roomCode || "ABCDE"}
        teams={teams}
        onAddTeam={() => {}}
        onPlay={() => {}}
        onSettings={() => {}}
        onBack={() => setCurrentScreen("home")}
        onCopyRoomCode={handleCopyRoomCode}
        onToggleTeam={handleToggleTeam}
      />
    );
  }

  return (
    <HomeScreen
      onHostGame={() => setCurrentScreen("lobby")}
      onJoinGame={() => setCurrentScreen("join")}
      onSettings={() => {}}
    />
  );
}
