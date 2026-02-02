export type RoomId = string;
export type PlayerId = string;
export type TeamId = string;
export type CardId = string;

export type Player = {
    playerId: PlayerId;
    name: string;
    teamId: TeamId;
};

export type Team = {
    teamId: TeamId;
    name: string;
    playerOrder: PlayerId[];
};

export type Card = {
    cardId: CardId;
    title: string;
    desc: string;
    pointValue: number;
    setSourceId?: string; 
}

export type GameSettings = {
    secondsPerTurn: number;
    shuffleBetweenRounds: boolean; 
    cardsPerPlayer: number; // number of cards each player adds
}

export type StartGamePayload = {
    roomId: RoomId;
    player: Player[];
    teams: Team[];
    settings: GameSettings;
    deck: Card[]
}

export type GamePhase = "lobby" | "in_round" | "round_end" | "game_end"
export type TurnStatus = "idle" | "active" | "ending"

export type TurnState = {
    status: TurnStatus;
    turnNumber: number;
    activeTeamId: TeamId | null;
    activeCluegiverId: PlayerId | null;
    endsAt: number | null;
    activeCardId: CardId | null;
};

// triggered when you correctly guess the card
export type GuessEvent = {
    cardId: CardId;
    teamId: TeamId;
    round: number;
    turnNumber: number;
};

// triggered when you incorrectly guess a card
export type SkipEvent = {
    cardId: CardId
    round: number;
    turnNumber: number;
}

export type GameState = {
    roomId: RoomId;
}